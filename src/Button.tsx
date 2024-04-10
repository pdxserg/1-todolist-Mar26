// @flow

import React from "react";

type ButtonProps = {
	title: string
	onclick: () => void
	color: string
};
export const Button: React.FC<ButtonProps> = (props: ButtonProps)=> {
	const{title, onclick, ...restButtonProps} = props


	const onCLickHandler = () => {
		onclick()
	}
	return (

		<button onClick={onCLickHandler}>{title}</button>

	);
};
// ___________________________________________________________________________________
// import React from "react";
//
// type ButtonProps = {
// 	title: string
// 	onclick: ()=> void
// 	color: string
// };
// export const Button: React.FC<ButtonProps> = ({title, onclick, ...restButtonProps}) => {
//
// 	const onCLickHandler = ()=> {
// 		onclick()
// 	}
// 	return (
//
// 		<button onClick={onCLickHandler}>{title}</button>
//
// 	);
// };

// import React from "react";---------------------------------------------------------

// type ButtonProps = {
// 	title: string
// 	onclick: ()=> void
// };
// export const Button = (props: ButtonProps) => {
//
// 	const onCLickHandler = ()=> {
// 		props.onclick()
// 	}
// 	return (
//
// 		<button onClick={onCLickHandler}> {props.title}</button>
//
// 	);
// };
