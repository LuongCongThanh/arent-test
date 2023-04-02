import React from 'react';
import {
	ReactComponent as IconMenu,
	ReactComponent as IconInfo,
	ReactComponent as IconChallenge,
	ReactComponent as IconMemo
} from "*.svg";
import Logo from "*.png";

const Footer = () => {
	const listMenu = [
		{title: '会員登録', url: ''},
		{title: '運営会社', url: ''},
		{title: '個人情報の取扱について', url: ''},
		{title: '特定商取引法に基づく表記', url: ''},
		{title: 'お問い合わせ', url: ''},
	]
	// const [menu, setMenu] = useState(listMenu);

	return (
		<div className="footer bg-dark-text">
			{listMenu && listMenu.map((menuItem: any, index: number) => (
				<span className="footer-title txt-footer color-light ">{menuItem.title}</span>
			))}
		</div>
	);
};

export default Footer;
