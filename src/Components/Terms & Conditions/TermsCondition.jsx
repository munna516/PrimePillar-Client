import React from "react";

const TermsCondition = () => {
  return (
    <div className="flex flex-col items-center p-6 min-h-screen text-lg">
      <div className="w-full max-w-4xl rounded-lg p-8">
        <h1 className="text-xl md:text-2xl lg:text-4xl font-bold mb-6 text-center text-primary">
          Terms and Conditions
        </h1>

        <section className="mb-6">
          <h2 className="text-2xl mb-2 text-dark-blue font-bold">Introduction</h2>
          <p className="text-gray-700">
            Welcome to PrimePillar! By accessing or using our website, you agree
            to abide by the terms and conditions outlined below. These terms
            ensure a secure and efficient experience for all users. Please read
            these terms carefully as they define your rights,
            responsibilities, and the rules governing your use of PrimePillar.
            If you have any questions, feel free to contact us at
            support@primepillar.com.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl mb-2 text-dark-blue font-bold">
            User Responsibilities
          </h2>
          <p className="text-gray-700">
            Users of PrimePillar are expected to maintain respect and integrity
            while using the platform. This includes:
            <ol className="font-semibold">
              <li>1. Providing accurate and up-to-date information.</li>
              <li>2. Respecting the privacy and rights of other residents.</li>
              <li>3. Complying with building rules and regulations.</li>
              <li>4. Using platform features responsibly.</li>
            </ol>
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl mb-2 text-dark-blue font-bold">
            Content Ownership and Licensing
          </h2>
          <p className="text-gray-700">
            When you submit content such as feedback or maintenance requests
            on PrimePillar, you retain ownership of your contributions.
            However, by submitting content, you grant us a non-exclusive,
            royalty-free license to use your submissions to operate and improve
            the platform. We reserve the right to remove any content deemed
            inappropriate or in violation of these terms.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl mb-2 text-dark-blue font-bold">
            Intellectual Property
          </h2>
          <p className="text-gray-700">
            All content, design elements, and branding on PrimePillar are the
            exclusive intellectual property of the site owner unless otherwise
            stated. Users are prohibited from copying, reproducing, or using
            any of these materials for commercial purposes without explicit
            written permission.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl mb-2 text-dark-blue font-bold">
            Prohibited Activities
          </h2>
          <ul className="list-disc list-inside text-gray-700">
            <li>Posting false or misleading information.</li>
            <li>Violating building policies or platform rules.</li>
            <li>Attempting unauthorized access to restricted areas.</li>
            <li>Sharing malicious content or software.</li>
            <li>Using the platform for illegal or unethical purposes.</li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl mb-2 text-dark-blue font-bold">
            Disclaimer of Warranties
          </h2>
          <p className="text-gray-700">
            PrimePillar is provided "as is," without warranties of any kind.
            We do not guarantee the accuracy of user-submitted content or the
            uninterrupted functionality of the platform. By using the website,
            you agree to assume all risks associated with its use.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl mb-2 text-dark-blue font-bold">
            Limitation of Liability
          </h2>
          <p className="text-gray-700">
            While we strive to provide reliable service, PrimePillar is not
            liable for any damages arising from the use or inability to use the
            platform. This includes errors, data loss, or unauthorized access.
            Your use of the platform is at your own risk.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl mb-2 text-dark-blue font-bold">
            Modification of Terms
          </h2>
          <p className="text-gray-700">
            We reserve the right to update or modify these terms at any time.
            Any changes will be effective immediately upon posting. Continued
            use of the website after changes constitutes acceptance of the
            updated terms.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl mb-2 text-dark-blue font-bold">
            Governing Law
          </h2>
          <p className="text-gray-700">
            These terms are governed by the laws of Bangladesh. Any disputes
            will be resolved under the jurisdiction of the relevant courts in
            Bangladesh.
          </p>
        </section>

        <section className="text-center mt-6">
          <p className="text-gray-700">
            If you have any questions about these terms, feel free to contact
            us at
            <span className="text-dark-blue"> mehedihasanmunna516@gmail.com</span>
          </p>
        </section>
      </div>
    </div>
  );
};

export default TermsCondition;
