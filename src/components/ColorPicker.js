import React from 'react';
import Title from './Title';
import Button from './elements/Button';
import styled from 'styled-components';
import FGColor from './elements/FGColor';
import BGColor from './elements/BGColor';

const Display = styled.div`
    display: flex;
    overflow-x: auto;
    white-space: nowrap;
    align-items: center;
    justify-content: space-between;
`;

const Pickers = styled.div`
	display: flex;
    flex-basis: 50%;
    margin: 0 3px;
    position: relative;
    height: 65px;
`;

const generateRandomColor = () => `#${(0x1000000 + Math.random() * 0xFFFFFF).toString(16).substr(1, 6)}`;
const complementaryColor = (color) => {
    let hexColor = color.replace('#', '0x');
    return `#${(`000000${('0xffffff' ^ hexColor).toString(16)}`).slice(-6) }`;
}

const hexToRGB = (h, rawValues=false) => {
	let r = 0
	let g = 0
	let b = 0
	if (h.length === 4) {
		r = `0x${h[1]}${h[1]}`
		g = `0x${h[2]}${h[2]}`
		b = `0x${h[3]}${h[3]}`
		return rawValues ? {r: +r, g: +g, b: +b}:`rgb(${+r},${+g},${+b})`
	} else if (h.length === 7) {
		r = `0x${h[1]}${h[2]}`
		g = `0x${h[3]}${h[4]}`
		b = `0x${h[5]}${h[6]}`
		return rawValues ? {r: +r, g: +g, b: +b} :`rgb(${+r},${+g},${+b})`
	} else {
		let sep = h.includes(',') ? ',' : ' '
		h = h.substr(4).split(')')[0].split(sep)
		let r = (+h[0]).toString(16)
		let g = (+h[1]).toString(16)
		let b = (+h[2]).toString(16)
		if (r.length === 1) {
			r = `0${r}`
		}
		if (g.length === 1) {
			g = `0${g}`
		}
		if (b.length === 1) {
			b = `0${b}`
		}
		return `#${r}${g}${b}`
	}
}

const isGoodBrightnessDifference = (bgColor, foregroundColor) => {
	const bgColorRGB = hexToRGB(bgColor, true)
	const foregroundColorRGB = hexToRGB(foregroundColor, true)
	const bgColorLuminance = (0.299 * bgColorRGB.r) + (0.587 * bgColorRGB.g) + (0.114 * bgColorRGB.b)
	const foregroundColorLuminance = (0.299 * foregroundColorRGB.r) + (0.587 * foregroundColorRGB.g) + (0.114 * foregroundColorRGB.b)

	return Math.abs(bgColorLuminance - foregroundColorLuminance) >= 125
}

const isGoodColorDifference = (bgColor, foregroundColor) => {
	const bgColorRGB = hexToRGB(bgColor, true)
	const foregroundColorRGB = hexToRGB(foregroundColor, true)
	
	return Math.max(bgColorRGB.r, foregroundColorRGB.r) - Math.min(bgColorRGB.r, foregroundColorRGB.r) + Math.max(bgColorRGB.g, foregroundColorRGB.g) - Math.min(bgColorRGB.g, foregroundColorRGB.g) + Math.max(bgColorRGB.b, foregroundColorRGB.b)-Math.min(bgColorRGB.b, foregroundColorRGB.b) >= 500
}

const RandColors = () => {
    let primaryBgColor = generateRandomColor();
    let primaryColor = complementaryColor(primaryBgColor);

    while(!isGoodBrightnessDifference(primaryBgColor, primaryColor) && isGoodColorDifference(primaryBgColor, primaryColor)) {
        primaryBgColor = generateRandomColor();
        primaryColor = complementaryColor(primaryBgColor);
    }

    // now update the store
}


const ColorPicker = () => (
    <div className="hi">
        <Display>
            <Title backgroundColor={'linear-gradient(to right, rgb(34, 34, 34) 50%, rgb(221, 221, 221) 50%);'} id={'dafafd'} title={'Combination'} />
            <div>
                <Button onClick={RandColors} black>Random ⭯</Button>
                <Button black>Swap ⇌</Button>
            </div>
        </Display>
        <Pickers>
            <FGColor />
            <BGColor />
        </Pickers>
    </div>
);

export default ColorPicker;