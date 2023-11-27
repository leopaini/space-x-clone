// src/query/schema.ts
import { gql } from "@apollo/client";

export const GET_LAUNCHES = gql`
  query launchList($limit: Int!) {
    launches(limit: $limit) {
      id
      mission_name
      details
      rocket {
        rocket_name
        rocket_type
      }
      links {
        article_link
        flickr_images
        video_link
      }
      launch_date_local
    }
  }
`;

export const GET_LAUNCH_BY_ID = gql`
  query launch($id: ID!) {
    launch(id: $id) {
      id
      mission_name
      details
      rocket {
        rocket_name
        rocket_type
      }
      links {
        article_link
        flickr_images
        video_link
      }
      launch_date_local
    }
  }
`;
