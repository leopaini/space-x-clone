import React from "react";

export type RootLayoutProps = {
  children: React.ReactNode;
};

export type Launch = {
  id: string;
  mission_name: string;
  rocket: {
    rocket_name: string;
    rocket_type: string;
  };
  links: {
    article_link: string;
    flickr_images: string[];
    video_link: string;
  };
  details: string;
  launch_date_local: string;
};

export type Pagination = {
  limit: number;
  offset: number;
};

export type LaunchProps = {
  launch: Launch;
};

export type DetailsPageProps = {
  params: {
    id: string;
  };
};

export interface QueryResponse {
  launches: Launch[];
}

export interface ResponseLaunch {
  launch: Launch;
}
