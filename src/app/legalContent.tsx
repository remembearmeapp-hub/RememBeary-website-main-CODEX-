import type { ReactNode } from "react";

export interface LegalSection {
  title: string;
  content: ReactNode;
}

export interface LegalDocumentContent {
  title: string;
  lastUpdated: string;
  intro?: ReactNode;
  sections: LegalSection[];
}

export const privacyPolicyContent: LegalDocumentContent = {
  title: "Privacy Policy",
  lastUpdated: "April 6, 2026",
  intro:
    'RememBeary ("we", "our", or "us") operates the RememBeary mobile application ("App"). This Privacy Policy explains how we collect, use, and protect your information.',
  sections: [
    {
      title: "1. Information We Collect",
      content: (
        <>
          <h4 className="font-bold text-[#1E2430]">Account Information</h4>
          <ul className="mt-3 list-disc space-y-2 pl-6">
            <li>Email address</li>
            <li>Username</li>
            <li>Password (securely hashed and not stored in plain text)</li>
          </ul>

          <h4 className="mt-6 font-bold text-[#1E2430]">Authentication Data</h4>
          <ul className="mt-3 list-disc space-y-2 pl-6">
            <li>Apple Sign-In (via Apple)</li>
            <li>Google Sign-In (via Google)</li>
          </ul>

          <h4 className="mt-6 font-bold text-[#1E2430]">Usage Data</h4>
          <ul className="mt-3 list-disc space-y-2 pl-6">
            <li>Progress data (learned phrases, completed blocks)</li>
            <li>In-app interactions</li>
          </ul>

          <h4 className="mt-6 font-bold text-[#1E2430]">Device &amp; Technical Data</h4>
          <ul className="mt-3 list-disc space-y-2 pl-6">
            <li>Device type</li>
            <li>Operating system</li>
            <li>App version</li>
            <li>Basic diagnostics</li>
          </ul>
        </>
      ),
    },
    {
      title: "2. How We Use Information",
      content: (
        <ul className="list-disc space-y-2 pl-6">
          <li>Provide and maintain the App</li>
          <li>Sync your progress across devices</li>
          <li>Authenticate users and secure accounts</li>
          <li>Process purchases and subscriptions</li>
          <li>Improve performance and user experience</li>
          <li>Provide customer support</li>
        </ul>
      ),
    },
    {
      title: "3. Legal Bases and Data Transfer",
      content: (
        <>
          <p>We process your data based on:</p>
          <ul className="mt-3 list-disc space-y-2 pl-6">
            <li>Contract necessity</li>
            <li>Legitimate interests</li>
            <li>Consent (where applicable)</li>
          </ul>
          <p className="mt-4">
            Your information may be transferred to — and maintained on — servers located outside of your country
            (including servers operated by Google Firebase in the United States), where data protection laws may differ.
          </p>
        </>
      ),
    },
    {
      title: "4. Third-Party Services",
      content: (
        <>
          <p>We use trusted third-party services:</p>
          <ul className="mt-3 list-disc space-y-2 pl-6">
            <li>Firebase — database (Firestore), storage (including audio files), and backend services</li>
            <li>RevenueCat — subscription and purchase management</li>
            <li>Apple — payments and Apple Sign-In</li>
            <li>Google — Google Sign-In</li>
          </ul>
          <p className="mt-4">These providers may process your data in accordance with their own privacy policies.</p>
        </>
      ),
    },
    {
      title: "5. Purchases & Payments",
      content: <p>All payments are processed through Apple. We do not collect or store payment information.</p>,
    },
    {
      title: "6. Data Retention",
      content: (
        <p>
          We retain your data while your account is active or as necessary to provide the App. Upon your request to
          delete your account, we will delete your personal data within a reasonable timeframe unless retention is
          required by law.
        </p>
      ),
    },
    {
      title: "7. Your Rights & Account Deletion",
      content: (
        <>
          <p>You have the right to:</p>
          <ul className="mt-3 list-disc space-y-2 pl-6">
            <li>Access your data</li>
            <li>Correct your data</li>
            <li>Request deletion</li>
            <li>Withdraw consent (where applicable)</li>
          </ul>
          <p className="mt-4">
            You can delete your account and associated data directly within the App settings or by contacting{" "}
            <a className="font-semibold text-[#47B8F5] hover:text-[#5A8BFF]" href="mailto:support.remembeary@gmail.com">
              support.remembeary@gmail.com
            </a>
            .
          </p>
        </>
      ),
    },
    {
      title: "8. Security",
      content: (
        <p>
          We implement reasonable technical and organizational security measures, including secure data transmission,
          access controls, and Firebase Security Rules.
        </p>
      ),
    },
    {
      title: "9. Children",
      content: <p>The App is not intended for children under 13. We do not knowingly collect data from children under 13.</p>,
    },
    {
      title: "10. Changes",
      content: <p>We may update this Privacy Policy from time to time. Updates will be reflected in the App.</p>,
    },
    {
      title: "11. Contact",
      content: (
        <p>
          For any questions, please contact us at:{" "}
          <a className="font-semibold text-[#47B8F5] hover:text-[#5A8BFF]" href="mailto:support.remembeary@gmail.com">
            support.remembeary@gmail.com
          </a>
        </p>
      ),
    },
  ],
};

export const termsOfUseContent: LegalDocumentContent = {
  title: "Terms of Use",
  lastUpdated: "April 6, 2026",
  intro: "By using RememBeary, you agree to these Terms.",
  sections: [
    {
      title: "1. Service",
      content: <p>RememBeary provides language learning content for personal, non-commercial use.</p>,
    },
    {
      title: "2. Accounts",
      content: (
        <p>
          You are responsible for maintaining the security of your account created via email, Apple Sign-In, or Google
          Sign-In.
        </p>
      ),
    },
    {
      title: "3. Purchases & Subscriptions",
      content: (
        <>
          <p>The App offers monthly, 6-month, and 12-month subscriptions, as well as one-time purchases.</p>
          <ul className="mt-3 list-disc space-y-2 pl-6">
            <li>
              <span className="font-semibold text-[#1E2430]">Automatic Renewal:</span> Subscriptions automatically renew unless canceled at least 24 hours before the end of the current period.
            </li>
            <li>
              <span className="font-semibold text-[#1E2430]">Billing:</span> Payment will be charged to your Apple ID account at confirmation of purchase. Your account will be charged for renewal within 24 hours prior to the end of the current period.
            </li>
            <li>
              <span className="font-semibold text-[#1E2430]">Management:</span> You can manage or cancel subscriptions in your Apple account settings.
            </li>
          </ul>
        </>
      ),
    },
    {
      title: "4. Free Content",
      content: <p>The App offers a limited amount of free content. Access to full content requires a subscription or one-time purchase.</p>,
    },
    {
      title: "5. Refunds & Restores",
      content: (
        <p>
          All purchases are handled by Apple. Refund requests must be made through Apple. You can use the “Restore
          Purchases” option in the App to regain access to previous purchases.
        </p>
      ),
    },
    {
      title: "6. License & Restrictions",
      content: (
        <>
          <p>We grant you a limited, non-transferable license to use the App.</p>
          <ul className="mt-3 list-disc space-y-2 pl-6">
            <li>
              <span className="font-semibold text-[#1E2430]">Prohibitions:</span> You may not copy, distribute, reverse engineer, or otherwise exploit any part of the App.
            </li>
            <li>
              <span className="font-semibold text-[#1E2430]">Automated Systems:</span> You are strictly prohibited from using automated systems (including bots or scrapers) to extract audio, text, or data from the App.
            </li>
          </ul>
        </>
      ),
    },
    {
      title: "7. Intellectual Property",
      content: <p>All content, including audio recordings, text, and design, is the exclusive property of RememBeary.</p>,
    },
    {
      title: "8. Termination",
      content: <p>We may suspend or terminate your account if you violate these Terms.</p>,
    },
    {
      title: "9. Disclaimer",
      content: <p>The App is provided “as is” without warranties of any kind. We do not guarantee uninterrupted service or error-free content.</p>,
    },
    {
      title: "10. Limitation of Liability",
      content: (
        <p>
          To the maximum extent permitted by law, RememBeary shall not be liable for any indirect, incidental, or
          consequential damages.
        </p>
      ),
    },
    {
      title: "11. Governing Law",
      content: <p>These Terms are governed by the laws of the Province of Ontario and applicable federal laws of Canada.</p>,
    },
    {
      title: "12. Contact",
      content: (
        <p>
          For any questions, please contact us at:{" "}
          <a className="font-semibold text-[#47B8F5] hover:text-[#5A8BFF]" href="mailto:support.remembeary@gmail.com">
            support.remembeary@gmail.com
          </a>
        </p>
      ),
    },
  ],
};
