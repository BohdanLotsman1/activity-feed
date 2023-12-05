import React, { useState } from "react";
import ActivityInput from "./components/ActivityInput";
import ActivityList, { List } from "./components/ActivityList";
import { Layout } from "./components/Layout";
import { Divider } from "./components/Divider";
import { IActivity } from "./types";
import { ActivityContext } from "./context";

function App() {
  const [activities, setActivities] = useState<Array<IActivity>>([]);

  return (
    <Layout>
      <Divider />
      <ActivityContext.Provider value={{ activities, setActivities }}>
        <List>
          <ActivityInput />
          <ActivityList />
        </List>
      </ActivityContext.Provider>
    </Layout>
  );
}

export default App;
