import { graphql, useFragment } from "react-relay";

export default function Name(props) {
  const data = useFragment(
    graphql`
      fragment Name_user on User {
        name
      }
    `,
    props.user
  );

  return <span>{data.name}</span>;
}
