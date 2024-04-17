// @flow
// import s from './Button.module.css'
// import React, {ButtonHTMLAttributes} from "react";
//
// type ButtonProps = {
// 	title: string
// 	onclick: () => void
// 	color?: string
// 	disabled?: boolean
// 	//children?: React.ReactNode
// }& ButtonHTMLAttributes<HTMLButtonElement>
// export const Button= ({className,color, disabled, title, children, onclick, ...restButtonProps}: ButtonProps)=> {
//
// 	const onCLickHandler = () => {
// 		onclick()
// 	}
// 	//const styleButton = s.button+' '+ s.red
// 	//const styleButton = `${s.button} ${s.red}`
// 	const styleButton = `
// 	${s.button} ;
// 	${color === 'red'? s.red : color === 'secondary' ?  s.secondary : s.button};
// 	$ {disabled? s.disabled : ''};
// 	`
// 	return (
//
// 		<button
// 			onClick={onCLickHandler}
// 			className={styleButton}
// 		     //   {...restButtonProps}
//
// 		>{title}</button>
//
// 	);
// };
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


import * as React from 'react';
import {ButtonHTMLAttributes} from "react";

type ButtonProps = {
	title: string
	onCl: () =>void
}
export const Button = ({title, onCl}: ButtonProps) => {
	return (
		<button onClick={onCl} >{title}</button>
	);
};