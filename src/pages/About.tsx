import React from 'react';
import { Shield, Users, Target, Award } from 'lucide-react';

export default function About() {
  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-primary mb-4">About Lumina Enterprises</h1>
          <p className="text-xl text-gray-600">
            Your trusted partner in electrical solutions since 2010
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-16">
          <div>
            <h2 className="text-2xl font-bold mb-4">Our Story</h2>
            <p className="text-gray-600 mb-4">
              Lumina Enterprises was founded with a vision to provide comprehensive electrical solutions
              to industries across India. With years of experience and a team of skilled professionals,
              we have established ourselves as a leading provider of electrical services and solutions.
            </p>
            <p className="text-gray-600">
              Our commitment to quality, safety, and customer satisfaction has helped us build long-lasting
              relationships with our clients and earn their trust as a reliable partner for all their
              electrical needs.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
            <p className="text-gray-600 mb-4">
              To provide innovative, reliable, and sustainable electrical solutions that empower our
              clients' operations while maintaining the highest standards of safety and quality.
            </p>
            <p className="text-gray-600">
              We strive to be at the forefront of technological advancements in the electrical industry
              and continue to expand our expertise to serve our clients better.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
          <div className="text-center">
            <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Shield className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-xl font-bold mb-2">Quality</h3>
            <p className="text-gray-600">Committed to delivering excellence in every project</p>
          </div>
          <div className="text-center">
            <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-xl font-bold mb-2">Expert Team</h3>
            <p className="text-gray-600">Skilled professionals with years of experience</p>
          </div>
          <div className="text-center">
            <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Target className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-xl font-bold mb-2">Innovation</h3>
            <p className="text-gray-600">Embracing new technologies and solutions</p>
          </div>
          <div className="text-center">
            <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Award className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-xl font-bold mb-2">Recognition</h3>
            <p className="text-gray-600">Award-winning service and support</p>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold mb-4">Why Choose Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <ul className="space-y-2">
              <li className="flex items-center">
                <span className="text-yellow-400 mr-2">•</span>
                <span>24/7 Emergency Support</span>
              </li>
              <li className="flex items-center">
                <span className="text-yellow-400 mr-2">•</span>
                <span>Certified Professionals</span>
              </li>
              <li className="flex items-center">
                <span className="text-yellow-400 mr-2">•</span>
                <span>Latest Technology</span>
              </li>
            </ul>
            <ul className="space-y-2">
              <li className="flex items-center">
                <span className="text-yellow-400 mr-2">•</span>
                <span>Competitive Pricing</span>
              </li>
              <li className="flex items-center">
                <span className="text-yellow-400 mr-2">•</span>
                <span>Customized Solutions</span>
              </li>
              <li className="flex items-center">
                <span className="text-yellow-400 mr-2">•</span>
                <span>Proven Track Record</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}