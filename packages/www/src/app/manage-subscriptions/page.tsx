"use client";

import { capitalizeFirst, NewsletterEnum, SwitchInput } from "@t5mm-com/shared";
import { useTranslation } from "react-i18next";
import { useState } from "react";

export default function PrivacyPolicyPage() {
  const { t } = useTranslation();
  const [selected, setSelected] = useState<string[]>([]);

  const toggleNewsletter = (newsletter: string) => {
    setSelected((prev) =>
      prev.includes(newsletter)
        ? prev.filter((n) => n !== newsletter)
        : [...prev, newsletter]
    );
  };

  return (
    <>
      <h1>Manage your subscriptions</h1>
      {Object.values(NewsletterEnum).map((newsletter, index) => {
        return <SwitchInput key={index} />;
      })}
      {/* {Object.values(NewsletterEnum).map((newsletter, index) => {
        const isChecked = selected.includes(newsletter);
        return (
          <label
            key={index}
            style={{
              display: "flex",
              alignItems: "center",
              gap: ".75rem",
              cursor: "pointer",
              //   backgroundColor: "rgb(24 24 27)",
              //   padding: '1rem',
              //   margin: '1rem'
            }}
          >
            <span
              style={{
                position: "relative",
                width: "44px",
                height: "24px",
                flexShrink: 0,
              }}
            >
              <input
                type="checkbox"
                value={newsletter}
                checked={isChecked}
                onChange={() => toggleNewsletter(newsletter)}
                style={{
                  position: "absolute",
                  opacity: 0,
                  width: "100%",
                  height: "100%",
                  margin: 0,
                  cursor: "pointer",
                }}
              />
              <span
                style={{
                  position: "absolute",
                  inset: 0,
                  backgroundColor: isChecked ? "#4caf50" : "#ccc",
                  borderRadius: "24px",
                  transition: "background-color 0.2s",
                  pointerEvents: "none",
                }}
              />
              <span
                style={{
                  position: "absolute",
                  top: "2px",
                  left: "2px",
                  width: "20px",
                  height: "20px",
                  backgroundColor: "white",
                  borderRadius: "50%",
                  transition: "transform 0.2s",
                  transform: isChecked ? "translateX(20px)" : "translateX(0)",
                  pointerEvents: "none",
                }}
              />
            </span>
            {capitalizeFirst(t(newsletter))}
          </label>
        );
      })} */}
      <br />
      <button>Update</button>
      {/* <p style={{ fontSize: ".9rem", color: "#999" }}>
        Last updated: 20th November 2025
      </p>
      <h2>Introduction</h2>
      <p>
        Welcome to T5MM. We respect your privacy and are committed to protecting
        your personal data. This privacy policy explains how we collect, use,
        and safeguard your information when you subscribe to our newsletters.
      </p>

      <h2>Information we collect</h2>
      <p>When you subscribe to our newsletters, we collect:</p>
      <ul>
        <li>
          <strong>Email address:</strong> Required to send you the newsletters
          you&apos;ve subscribed to
        </li>
        <li>
          <strong>Newsletter preferences:</strong> Which newsletters you&apos;ve
          chosen to receive
        </li>
        <li>
          <strong>Subscription date:</strong> When you subscribed to our service
        </li>
      </ul>

      <h2>How we use your information</h2>
      <p>We use your information exclusively to:</p>
      <ul>
        <li>Send you the newsletters you&apos;ve subscribed to</li>
        <li>Manage your subscription preferences</li>
        <li>Improve our newsletter content and service</li>
        <li>Comply with legal obligations</li>
      </ul>
      <p>
        We will <strong>never</strong> sell, rent, or share your email address
        with third parties for marketing purposes.
      </p>

      <h2>Data storage and security</h2>
      <p>
        Your data is stored securely using industry-standard encryption and
        security measures.
      </p>

      <h2>Your rights</h2>
      <p>You have the right to:</p>
      <ul>
        <li>
          <strong>Unsubscribe:</strong> You can unsubscribe from any or all
          newsletters at any time using the unsubscribe link in every email
        </li>
        <li>
          <strong>Access your data:</strong> Request a copy of the personal data
          we hold about you
        </li>
        <li>
          <strong>Delete your data:</strong> Request deletion of your personal
          data from our systems
        </li>
        <li>
          <strong>Update your preferences:</strong> Change which newsletters you
          receive at any time
        </li>
      </ul> */}

      {/* <h2>Cookies</h2>
      <p>
        Our website uses minimal cookies necessary for functionality. We do not
        use tracking or advertising cookies.
      </p> */}

      {/* <h2>Changes to this policy</h2>
      <p>
        We may update this privacy policy from time to time. Any changes will be
        posted on this page with an updated revision date.
      </p> */}
    </>
  );
}
