import React from "react";

import { Tabs, Card, Rate, Button } from "antd";

const { TabPane } = Tabs;

const CustomTabs = () => {
  return (
    <Tabs defaultActiveKey="1">
      {/* Здесь можно добавить больше категорий */}
      <TabPane tab="Category1" key="1">
        {/* Здесь может быть список карточек услуг */}
        <Card
          hoverable
          bodyStyle={{ 
            display: 'flex', 
            flexDirection: 'row',
            alignItems: 'center' // Align items vertically center
          }}
        >
          <div>
            <img
              alt="example"
              src="https://via.placeholder.com/240x150"
              style={{ marginRight: 20 }} // Added margin for spacing
            />
          </div>
          <div>
            <Card.Meta title="Service Name" description="Service Description" />
            <Rate defaultValue={4} style={{ marginTop: 16 }} />
            <div style={{ marginTop: 16 }}>
              <Button>Add to Favorites</Button>
              <Button type="primary" style={{ marginLeft: 8 }}>
                Book
              </Button>
            </div>
          </div>
        </Card>
      </TabPane>
      {/* Здесь можно добавить больше категорий */}
    </Tabs>
  )
}

export default CustomTabs;