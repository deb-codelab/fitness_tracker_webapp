"use client"; // Required for Next.js app router

import { useState } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";

export default function ProfileForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    gender: "",
    dob: "",
    bio: "",
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
    // Handle form submission (e.g., send data to API)
  };

  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col md={8}>
          <Form onSubmit={handleSubmit}>
            {/* Name Field */}
            <Form.Group className="mb-3" controlId="name">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                required
              />
            </Form.Group>

            {/* Email Field */}
            <Form.Group className="mb-3" controlId="email">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                required
              />
            </Form.Group>

            {/* Phone Number Field */}
            <Form.Group className="mb-3" controlId="phone">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Enter your phone number"
                required
              />
            </Form.Group>

            {/* Address Field */}
            <Form.Group className="mb-3" controlId="address">
              <Form.Label>Address</Form.Label>
              <Form.Control
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
                placeholder="Enter your address"
                required
              />
            </Form.Group>

            {/* Gender Field */}
            <Form.Group className="mb-3" controlId="gender">
              <Form.Label>Gender</Form.Label>
              <Form.Select name="gender" value={formData.gender} onChange={handleChange} required>
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </Form.Select>
            </Form.Group>

            {/* Date of Birth Field */}
            <Form.Group className="mb-3" controlId="dob">
              <Form.Label>Date of Birth</Form.Label>
              <Form.Control
                type="date"
                name="dob"
                value={formData.dob}
                onChange={handleChange}
                required
              />
            </Form.Group>

            {/* Bio Field */}
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

            {/* Profile Picture Upload */}
            <Form.Group className="mb-3" controlId="profilePicture">
              <Form.Label>Profile Picture</Form.Label>
              <Form.Control type="file" onChange={handleFileChange} />
            </Form.Group>

            {/* Submit Button */}
            <Button variant="primary" type="submit" className="w-100">
              Save Profile
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}
