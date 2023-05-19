import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

const ShopByCategory = () => {
  return (
    <div className="max-w-6xl mx-auto">
      <Tabs>
        <TabList>
          <Tab>Category </Tab>
          <Tab>Category 2</Tab>
          <Tab>Category 3</Tab>
        </TabList>

        <TabPanel>
          <h2>Wooden Toys in Category 1</h2>
          <img src="wooden-toy-1.jpg" alt="Wooden Toy 1" />
          <img src="wooden-toy-2.jpg" alt="Wooden Toy 2" />
        </TabPanel>
        <TabPanel>
          <h2>Wooden Toys in Category 2</h2>
          <img src="wooden-toy-3.jpg" alt="Wooden Toy 3" />
          <img src="wooden-toy-4.jpg" alt="Wooden Toy 4" />
        </TabPanel>
        <TabPanel>
          <h2>Wooden Toys in Category 3</h2>
          <img src="wooden-toy-5.jpg" alt="Wooden Toy 5" />
          <img src="wooden-toy-6.jpg" alt="Wooden Toy 6" />
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ShopByCategory;
