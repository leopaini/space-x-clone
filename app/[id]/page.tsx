import { DetailsPageProps } from "@/types";
import { LaunchDetails } from "@/components";

export default function Page({ params }: DetailsPageProps) {
  return <LaunchDetails id={params.id} />;
}
