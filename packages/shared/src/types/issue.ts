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
  publicationDate: string;
  sponsorships?: {
    primary?: IssueItemProps;
    secondary?: IssueItemProps;
    tertiary?: IssueItemProps;
  };
  sections: IssueSectionProps[];
}
