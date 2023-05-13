import React from "react";
import { Row, Col, Input, Select, Layout } from "antd";
import CustomTabs from '../tabs'

const { Search } = Input;
const { Option } = Select;
const { Content } = Layout;

const MainContent = () => {
  return (
    <Content style={{ padding: "0 50px" }}>
    <div style={{ padding: "2rem" }}>
      <Row gutter={[16, 16]}>
        <Col span={16}>
          <CustomTabs></CustomTabs>
        </Col>
        <Col span={8}>
          <Search
            placeholder="input search text"
            allowClear
            onSearch={(value) => console.log(value)}
          />
          <Select
            defaultValue="popularity"
            style={{ width: "100%", marginBottom: 16, marginTop: 16 }}
            onChange={(value) => console.log(value)}
          >
            <Option value="popularity">Popularity</Option>
            <Option value="rating">Rating</Option>
            <Option value="distance">Distance</Option>
          </Select>
        </Col>
      </Row>
    </div>
    </Content>
  );
};

export default MainContent;