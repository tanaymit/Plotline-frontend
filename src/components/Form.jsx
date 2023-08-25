import React,{useState} from "react";
import { InputNumber,Input, Select, Space } from 'antd';

function Form({buttonValue,tooltipText}){

  //send and maintain selected button value
  const [btn,setBtn] = useState('');
  const handleButtonChange = (value) => {
    
    setBtn(`${value}`);
    buttonValue(`${value}`);
    
  };

//maintain state of tooltip text
const [tooltipTest,setTooltipText] = useState('Text goes here');

const handleTooltipText = (text) => {
  setTooltipText(`${text.target.value}`);
  tooltipText(`${text.target.value}`);
}

    return(
        <div class="tooltip-form">
          {/* <h1>{btn}</h1>
          <h1>{tooltipTest}</h1> */}
        <Space
        direction="vertical"
        style={{
          width: '100%',
        }}
      >
        <label>Target Element</label>
    <Select
      size="large"
      defaultValue="b1"
      style={{
        width: '100%',
      }}
      onChange={handleButtonChange}
      
        options = {[
          {
            value: 'b1',
            label: 'Button 1',
          },
          {
            value: 'b2',
            label: 'Button 2',
          },
          {
            value: 'b3',
            label: 'Button 3',
          },
          {
            value: 'b4',
            label: 'Button 4',
          },
          {
            value: 'b5',
            label: 'Button 5',
          }
        ]}
    />
    <label>Tooltip Text</label>
    <Input size="large" placeholder="Input" onChange={handleTooltipText}  on/>
    </Space>
    
    <Space>

    <Space direction="vertical">
    <label>Text Size</label>
    <InputNumber size="large" min={1} max={10} defaultValue={3} style={{width: '350px', marginRight: '135px'}}/>
    </Space>
    <Space direction="vertical">
    <label>Padding</label>
    <InputNumber size="large" min={1} max={10} defaultValue={3} style={{width: '350px'}}/>
    </Space>

    </Space>

    <Space direction="vertical" style={{width: '100%'}}>
    <label>Text Color</label>
    <Input size="large" placeholder="Input"/>
    <label>Background Color</label>
    <Input size="large" placeholder="Input"/>
    </Space>
  

    <Space direction="vertical">
    <label>Corner Radius</label>
    <InputNumber size="large" min={1} max={10} defaultValue={3} style={{width: '350px', marginRight: '135px'}}/>
    </Space>
    <Space direction="vertical">
    <label>Tooltip Width</label>
    <InputNumber size="large" min={1} max={10} defaultValue={3} style={{width: '350px'}}/>
    </Space>

    <Space direction="vertical">
    <label>Arrow Width</label>
    <InputNumber size="large" min={1} max={10} defaultValue={3} style={{width: '350px', marginRight: '135px'}}/>
    </Space>
    <Space direction="vertical">
    <label>Arrow Height</label>
    <InputNumber size="large" min={1} max={10} defaultValue={3} style={{width: '350px'}}/>
    </Space>
    </div>
    )
}

export default Form;