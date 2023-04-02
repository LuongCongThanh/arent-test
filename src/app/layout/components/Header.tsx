import React, {useState} from 'react';
import {ReactComponent as IconMemo} from '@assets/icons/icon_memo.svg';
import {ReactComponent as IconChallenge} from '@assets/icons/icon_challenge.svg';
import {ReactComponent as IconInfo} from '@assets/icons/icon_Info.svg';
import {ReactComponent as IconMenu} from '@assets/icons/icon_menu_2.svg';
import Logo from '@assets/images/logo.png';

const Header = () => {
	const listMenu = [
		{icon: <IconMemo/>, title: '自分の記録', url: ''},
		{icon: <IconChallenge/>, title: 'チャレンジ', url: ''},
		{icon: <IconInfo/>, title: 'お知らせ', url: ''},
		{icon: <IconMenu/>, title: '', url: ''},
	]
	// const [menu, setMenu] = useState(listMenu);

	return (
		<div className="header">
			<div className="header-logo">
				<img src={Logo} alt="healthy"/>
			</div>
			<div className="header-menu color-light">
				{listMenu && listMenu.map((menuItem: any, index: number) => (
					<>
						<span className="icon txt-xxl">{menuItem.icon}</span>
						<span className="header-menu-title txt-header">{menuItem.title}</span>
					</>
				))}
			</div>
		</div>
	);
};

export default Header;
