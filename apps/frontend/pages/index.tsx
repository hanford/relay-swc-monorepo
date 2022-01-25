import { useLazyLoadQuery, graphql } from "react-relay";
import Name from "ui/Name";

import Suspense from "../components/Suspense";
import type { pagesQuery } from "types/pagesQueryResponse.graphql";

function Component() {
  const data = useLazyLoadQuery<pagesQuery>(
    graphql`
      query pagesQuery {
        viewer {
          user {
            id
            ...Name_user
          }
        }
      }
    `,
    {}
  );

  return (
    <div>
      <div>
        Data requested from Application: <span>{data.viewer.user.id}</span>
      </div>
      <hr />
      <div>
        Fragment from ui: <Name user={data.viewer.user} />
      </div>
    </div>
  );
}

export default function Container() {
  return (
    <Suspense fallback="Loading...">
      <Component />
    </Suspense>
  );
}
