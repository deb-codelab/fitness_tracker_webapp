"use client";

import { useState } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import { toast } from "react-hot-toast"; // Import toast for notifications

export default function ProfileForm() {
  const [formData, setFormData] = useState({
    gender: "",
    dob: "",
    bio: "",
    bloodGroup: "",
    height: "",
    profilePicture: null,
    address: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    const allowedTypes = ["image/jpeg", "image/png", "image/jpg"];

    if (file && !allowedTypes.includes(file.type)) {
      toast.error("Only JPG, JPEG, and PNG files are allowed.");
      e.target.value = null; // Reset file input
      return;
    }

    setFormData({ ...formData, profilePicture: file });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    let uploadedImageUrl = "";

    if (formData.profilePicture) {
      try {
        // 1. Get presigned URL
        const bearerToken = await fetch("/api/auth/get-token", {
          method: "GET",
          credentials: "include",
        });
        const data = await bearerToken.json();
        const token = data.token;
        console.log("Bearer Token:", token);
        const fileType = formData.profilePicture.type;
        const presignRes = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/s3/generate-upload-url?fileType=${fileType}`, {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (!presignRes.ok) {
          const errorData = await presignRes.text();
          console.error("Presign failed:", errorData);
          toast.error("Failed to get upload URL.");
          return;
        }

        const { uploadUrl, fileUrl } = await presignRes.json();
        console.log("Presigned Upload URL:", uploadUrl);
        console.log("Public File URL:", fileUrl);

        // 2. Upload to S3
        const uploadRes = await fetch(uploadUrl, {
          method: "PUT",
          headers: {
            "Content-Type": formData.profilePicture.type,
          },
          body: formData.profilePicture,
        });

        if (!uploadRes.ok) {
          console.error("Upload failed");
          toast.error("Image upload failed.");
          return;
        }

        uploadedImageUrl = fileUrl;
      } catch (err) {
        console.error("Upload error:", err);
        toast.error("Network error during upload.");
        return;
      }
    }

    // 3. Send profile data to backend
    const profilePayload = {
      gender: formData.gender,
      dob: formData.dob,
      bio: formData.bio,
      bloodGroup: formData.bloodGroup,
      height: formData.height,
      address: formData.address,
      profilePicture: uploadedImageUrl,
    };

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/user-profile`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`,
        },
        body: JSON.stringify(profilePayload),
      });

      if (response.ok) {
        const data = await response.json();
        console.log("Profile saved successfully:", data);
        toast.success("Profile saved!");
      } else {
        console.error("Failed to save profile");
        toast.error("Failed to save profile.");
      }
    } catch (err) {
      console.error("Error submitting form:", err);
      toast.error("Error submitting profile.");
    }
  };

  return (
    <Container className="py-1">
      <Row className="justify-content-md-center">
        <Col md={8}>
          <Form onSubmit={handleSubmit}>
            {/* Gender */}
            <Form.Group className="mb-3" controlId="gender">
              <Form.Label>Gender</Form.Label>
              <Form.Select
                name="gender"
                value={formData.gender}
                onChange={handleChange}
              >
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </Form.Select>
            </Form.Group>

            {/* Blood Group */}
            <Form.Group className="mb-3" controlId="bloodGroup">
              <Form.Label>Blood Group</Form.Label>
              <Form.Select
                name="bloodGroup"
                value={formData.bloodGroup}
                onChange={handleChange}
              >
                <option value="">Select Blood Group</option>
                <option value="A+">A+</option>
                <option value="A-">A-</option>
                <option value="B+">B+</option>
                <option value="B-">B-</option>
                <option value="O+">O+</option>
                <option value="O-">O-</option>
                <option value="AB+">AB+</option>
                <option value="AB-">AB-</option>
              </Form.Select>
            </Form.Group>

            {/* Height */}
            <Form.Group className="mb-3" controlId="height">
              <Form.Label>Height (in cm)</Form.Label>
              <Form.Control
                type="text"
                name="height"
                value={formData.height}
                onChange={handleChange}
                placeholder="e.g. 170"
              />
            </Form.Group>

            {/* Address Field */}
            <Form.Group className="mb-3" controlId="address">
              <Form.Label>Address</Form.Label>
              <Form.Control
                as="textarea"
                name="address"
                value={formData.address}
                onChange={handleChange}
                rows={3}
                placeholder="Enter your address"
                required
              />
            </Form.Group>

            {/* Bio */}
            <Form.Group className="mb-3" controlId="bio">
              <Form.Label>Bio</Form.Label>
              <Form.Control
                as="textarea"
                name="bio"
                value={formData.bio}
                onChange={handleChange}
                rows={3}
                placeholder="Write something about yourself"
              />
            </Form.Group>

            {/* Profile Picture */}
            <Form.Group className="mb-4" controlId="profilePicture">
              <Form.Label>Profile Picture</Form.Label>
              <Form.Control type="file" onChange={handleFileChange} />
            </Form.Group>

            {/* Submit */}
            <Button variant="primary" type="submit" className="w-100">
              Save Profile
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}
