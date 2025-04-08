"use client";

import { useState } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";

export default function ProfileForm() {
  const [formData, setFormData] = useState({
    gender: "",
    dob: "",
    bio: "",
    bloodGroup: "",
    height: "",
    profilePicture: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, profilePicture: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted Data:", formData);
    // API call or form processing here
  };

  return (
    <Container className="py-5">
      <Row className="justify-content-md-center">
        <Col md={8}>
          <Form onSubmit={handleSubmit}>

            {/* Date of Birth */}
            <Form.Group className="mb-3" controlId="dob">
              <Form.Label>Date of Birth</Form.Label>
              <Form.Control
                type="date"
                name="dob"
                value={formData.dob}
                onChange={handleChange}
              />
            </Form.Group>

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
