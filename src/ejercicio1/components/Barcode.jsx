import React from 'react';

const Barcode = ({ value }) => {
  // Simple barcode visualization (not a real barcode generator)
  const renderBars = () => {
    // Generate barcode-like bars based on the value
    const bars = [];
    const valueString = value.toString().replace(/[^0-9]/g, ''); // Keep only digits
    
    // Start guard bars
    bars.push(<rect key="start1" x={0} y={0} width={2} height={40} fill="black" />);
    bars.push(<rect key="start2" x={4} y={0} width={2} height={40} fill="black" />);
    
    let xPos = 8;
    const spacing = 3;
    
    // Main barcode content
    for (let i = 0; i < valueString.length; i++) {
      const digit = parseInt(valueString[i], 10);
      
      // Different bar patterns for each digit
      const widthMultiplier = (digit % 3) + 1;
      const barHeight = 40;
      
      bars.push(<rect key={`d${i}`} x={xPos} y={0} width={widthMultiplier} height={barHeight} fill="black" />);
      xPos += widthMultiplier + spacing;
      
      // Add varying width bars for more realistic appearance
      if (i % 2 === 0) {
        bars.push(<rect key={`s${i}`} x={xPos} y={0} width={1} height={barHeight} fill="black" />);
        xPos += 1 + spacing;
      }
    }
    
    // End guard bars
    bars.push(<rect key="end1" x={xPos} y={0} width={2} height={40} fill="black" />);
    bars.push(<rect key="end2" x={xPos + 4} y={0} width={2} height={40} fill="black" />);
    
    return bars;
  };

  return (
    <svg width="100%" height="40" viewBox="0 0 300 40" preserveAspectRatio="xMidYMid meet">
      {renderBars()}
    </svg>
  );
};

export default Barcode;
