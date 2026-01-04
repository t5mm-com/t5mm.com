import { BaseEntityProps } from "./base";

interface IssueItemProps {
  header: string;
  body: string;
  url: string;
}

interface IssueSectionProps {
  header: string;
  items: IssueItemProps[];
}

export interface IssueProps extends BaseEntityProps {
  date: string;
  sponsorships: {
    primary?: IssueItemProps;
    secondary?: IssueItemProps;
    tertiary?: IssueItemProps;
  };
  sections: IssueSectionProps[];
}

const issue: IssueProps = {
  date: "2026-01-02",
  sections: [
    {
      header: "🧭 What’s Changing?",
      items: [
        {
          url: "#",
          header:
            "OpenAI bets big on audio as Silicon Valley declares war on screens (2m)",
          body: "OpenAI has unified several engineering, product, and research teams over the past couple of months to overhaul its audio models. The company is reportedly preparing to launch an audio-first personal device in about a year. Its new audio model will sound more natural, be able to handle interruptions, and even speak when users are talking. The entire tech industry seems to be headed toward a future where screens become background noise and audio takes center stage.",
        },
      ],
    },
  ],
};
