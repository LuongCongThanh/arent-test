import React, {useEffect, useRef, useState} from 'react';
import {ReactComponent as IconMemo} from '@assets/icons/icon_memo.svg';
import {ReactComponent as IconChallenge} from '@assets/icons/icon_challenge.svg';
import {ReactComponent as IconInfo} from '@assets/icons/icon_Info.svg';
import {ReactComponent as IconMenu} from '@assets/icons/icon_menu_2.svg';
import Logo from '@assets/images/logo.png';
import {useNavigate} from "react-router-dom";

const Header = () => {
    const navigate = useNavigate();
    const listMenu = [
        {icon: <IconMemo/>, title: '自分の記録', url: '', openDown: false},
        {icon: <IconChallenge/>, title: 'チャレンジ', url: '', openDown: false},
        {icon: <IconInfo/>, title: 'お知らせ', url: '', openDown: false},
        {icon: <IconMenu/>, title: '', url: '', openDown: true},
    ]
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);
    const handleToggle = (event: boolean) => {
        if (event) {
            setIsOpen(!isOpen);
        }
    };
    const listDropDown = [
        {title: '自分の記録', url: '/'},
        {title: '体重グラフ', url: '/record'},
        {title: '目標', url: '/column'},
        {title: '選択中のコース', url: ''},
        {title: 'コラム一覧', url: ''},
        {title: '設定', url: ''},
    ];
    const handleClickNavigate = (url: string) => {
        navigate(url);
    }
    useEffect(() => {
        const handleOutsideClick = (event: any) => {
            if (dropdownRef.current && !dropdownRef.current?.contains(event.target)) {
                setIsOpen(false);
            }
        };

        document.addEventListener("click", handleOutsideClick, true);

        return () => {
            document.removeEventListener("click", handleOutsideClick, true);
        };
    }, [dropdownRef]);


    return (
        <div className="header">
            <div className="header-logo">
                <img src={Logo} alt="healthy"/>
            </div>
            <div className="header-menu color-light">
                {listMenu && listMenu.map((menuItem: any, index: number) => (
                    <React.Fragment key={index}>
                        <span className="icon txt-xxl cursor-pt"
                              onClick={() => handleToggle(menuItem?.openDown)}>{menuItem.icon}</span>
                        <span className="header-menu-title txt-header cursor-pt">
                            {menuItem.title}
                        </span>
                    </React.Fragment>
                ))}

            </div>
            {isOpen && (
                <div className="header-dropdown" ref={dropdownRef}>
                    <ul>
                        {listDropDown && listDropDown.map((item: any, index: number) => (
                            <li className="header-dropdown-item bg-border cursor-pt" key={index}
                                onClick={() => handleClickNavigate(item?.url)}>
                                {item.title}
                            </li>
                        ))}

                    </ul>
                </div>
            )}
        </div>
    );
};

export default Header;
