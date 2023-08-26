import React, { useState } from "react";
import { InputNumber, Input, Select, Space } from 'antd';

function Form({ buttonValue, tooltipText, textsize, paddingsize, textcolor, bgcolor, bdradius, maxwidth, arrowwidth, arrowheight, imgurl }) {

  //send and maintain selected button value
  const [btn, setBtn] = useState('');
  const handleButtonChange = (value) => {

    setBtn(`${value}`);
    buttonValue(`${value}`);

  };

  //maintain state of tooltip text
  const [tooltipTest, setTooltipText] = useState('Text goes here');
  console.log(tooltipTest);

  const handleTooltipText = (text) => {
    setTooltipText(`${text.target.value}`);
    tooltipText(`${text.target.value}`);
  };

  //textsize handling
  const [textSize, setTestSize] = useState();
  console.log(textSize);
  const handleTextSize = (size) => {
    setTestSize(`${size}`);
    textsize(`${size}`);
  };

  //padding handling
  const [paddingSize, setPaddingSize] = useState();
  console.log(paddingSize);
  const handlePaddingSize = (size) => {
    setPaddingSize(`${size}`);
    paddingsize(`${size}`);
  };

  //textcolor handling
  const [textColor, setTextColor] = useState();
  console.log(textColor);
  const handleTextColor = (clr) => {
    setTextColor(`${clr.target.value}`);
    textcolor(`${clr.target.value}`);
  };

  //textcolor handling
  const [bgColor, setBgColor] = useState();
  console.log(bgColor);
  const handleBgColor = (bgclr) => {
    setBgColor(`${bgclr.target.value}`);
    bgcolor(`${bgclr.target.value}`);
  };

  //border radius handling
  const [radius, setRadius] = useState();
  console.log(radius);
  const handleRadius = (rad) => {
    setRadius(`${rad}`);
    bdradius(`${rad}`);
  };

  //max width handling
  const [maxWidth, setMaxWidth] = useState();
  console.log(maxWidth);
  const handleMaxWidth = (w) => {
    setMaxWidth(`${w}`);
    maxwidth(`${w}`);
  };
  //arrow width handling
  const [arrowWidth, setArrowWidth] = useState();
  console.log(arrowWidth);
  const handleArrowWidth = (arrw) => {
    setArrowWidth(`${arrw}`);
    arrowwidth(`${arrw}`);
  };
  //arrow height handling
  const [arrowHeight, setArrowHeight] = useState();
  console.log(arrowHeight);
  const handleArrowHeight = (arrh) => {
    setArrowHeight(`${arrh}`);
    arrowheight(`${arrh}`);
  };
  //image URL handling
  const [imgURL, setImgURL] = useState();
  console.log(imgURL);
  const handleImgURL = (url) => {
    setImgURL(`${url.target.value}`);
    imgurl(`${url.target.value}`);
  };
  return (
    <div class="tooltip-form">

      {/* dropdown element */}
      <Space direction="vertical" style={{width: '100%'}}>
        <label>Target Element</label>
        <Select
          size="large"
          defaultValue="b1"
          style={{
            width: '100%',
          }}
          onChange={handleButtonChange}

          options={[
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

        {/* //tooltip text textbox */}
        <label>Tooltip Text</label>
        <Input size="large" placeholder="Input" onChange={handleTooltipText} />
      </Space>

      {/* //text size and padding fields */}
      <Space>

        <Space direction="vertical">
          <label>Text Size</label>
          <InputNumber onChange={handleTextSize} size="large" min={1} max={10} defaultValue={3} style={{ width: '350px', marginRight: '135px' }} />
        </Space>
        <Space direction="vertical">
          <label>Padding</label>
          <InputNumber onChange={handlePaddingSize} size="large" min={1} max={10} defaultValue={3} style={{ width: '350px' }} />
        </Space>

      </Space>

      {/* //text color and background color fields */}
      <Space direction="vertical" style={{ width: '100%' }}>
        <label>Text Color</label>
        <Input size="large" placeholder="Input" onChange={handleTextColor} />
        <label>Background Color</label>
        <Input size="large" placeholder="Input" onChange={handleBgColor} />
      </Space>

      {/* //corner radius of tyhe tooltip */}
      <Space direction="vertical">
        <label>Corner Radius</label>
        <InputNumber onChange={handleRadius} size="large" min={1} max={10} defaultValue={3} style={{ width: '350px', marginRight: '135px' }} />
      </Space>

      {/* //width of the tooltip */}
      <Space direction="vertical">
        <label>Tooltip Width</label>
        <InputNumber onChange={handleMaxWidth} size="large" min={1} max={10} defaultValue={5} style={{ width: '350px' }} />
      </Space>

      {/* //width of the tooltip arrow */}
      <Space direction="vertical">
        <label>Arrow Width</label>
        <InputNumber onChange={handleArrowWidth} size="large" min={1} max={10} defaultValue={5} style={{ width: '350px', marginRight: '135px' }} />
      </Space>

      {/* //Height of the tooltip arrow from the button */}
      <Space direction="vertical">
        <label>Arrow Height</label>
        <InputNumber onChange={handleArrowHeight} size="large" min={0} max={10} defaultValue={1} style={{ width: '350px' }} />
      </Space>

      {/* //input to get the image URL to be displayed in the tooltip */}
      <Space direction="vertical" style={{ width: '100%' }}>
        <label>Tooltip Image</label>
        <Input onChange={handleImgURL} size="large" placeholder="Image URL (not functional)" />
      </Space>
    </div>
  )
}

export default Form;