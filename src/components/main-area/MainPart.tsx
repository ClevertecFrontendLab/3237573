import React, {useEffect, useState} from "react";

import {
    AndroidOutlined,
    AppleOutlined,
    CalendarOutlined,
    HeartOutlined,
    IdcardOutlined,
    TrophyOutlined
} from "@ant-design/icons";

import {Layout} from "antd";
import {TaskCard} from "@components/main-area/TaskCard.tsx";
import {SiderPanel} from "@components/main-area/SiderPanel.tsx";
import {useNavigate} from "react-router-dom";
import {Paths} from "../../routes/routes.tsx";

const {
    Header,
    Content,
} = Layout;

const tasks = [
    {
        id: 1,
        title: "Расписать тренировки",
        name: "Расписание",
        icon: <HeartOutlined/>
    },
    {
        id: 2,
        title: "Назначить календарь",
        name: "Календарь",
        icon: <CalendarOutlined/>
    },
    {
        id: 3,
        title: "Заполнить календарь",
        name: "Профиль",
        icon: <IdcardOutlined/>
    },

];

const siderMenuItems = [
    {
        key: '1',
        icon: <CalendarOutlined/>,
        label: 'Календарь',
    },
    {
        key: '2',
        icon: <HeartOutlined/>,
        label: 'Тренировки',
    },
    {
        key: '3',
        icon: <TrophyOutlined/>,
        label: 'Достижения',
    },
    {
        key: '4',
        icon: <IdcardOutlined/>,
        label: 'Профиль',
    }
]

const siderStyle = {
    background: 'var(--character-light-primary-inverse)',
    width: '208px',
    flex: '0 0 208px',
    maxWidth: 'inherit',
    minWidth: '64px',

}

const sider360menuItems = [
    {
        key: '1',
        label: 'Календарь',
    },
    {
        key: '2',
        label: 'Тренировки',
    },
    {
        key: '3',
        label: 'Достижения',
    },
    {
        key: '4',
        label: 'Профиль',
    }
]

const sider360Style = {
    background: 'var(--character-light-primary-inverse)',
    width: '106px',
    flex: '0 0 106px',
    maxWidth: 'inherit',
    minWidth: '0px',
    position: 'absolute',
}

export const MainPart: React.FC = () => {
    const navigate = useNavigate()

    useEffect(()=> {
        if (localStorage.getItem('userAccessToken') === null ||
            localStorage.getItem('userAccessToken') === undefined) {
            navigate(Paths.AUTH)
        }
    })

    const [collapsed, setCollapsed] = useState(true);
    const handleCollapse = () => {
        setCollapsed(!collapsed)
    }

    return (
        <Layout className="root" id="root">
            <SiderPanel
                className={"sider"}
                menuItems={siderMenuItems}
                width={208}
                collapsedWidth={80}
                isCollapsed={collapsed}
                handleCollapse={handleCollapse}
                style={siderStyle}
            />

            <SiderPanel
                className={"sider360"}
                menuItems={sider360menuItems}
                width={106}
                collapsedWidth={0}
                isCollapsed={collapsed}
                handleCollapse={handleCollapse}
                style={sider360Style}
            />

            <Layout className="content">
                <div className="wrapper">
                    <Header className="header"
                            style={{}}>
                        <div className="breadcrumb"><a href="#root">Главная</a></div>
                        <div className="heading">
                            <div className="hello">
                                Приветствуем тебя в&nbsp;CleverFit&nbsp;— приложении,<br/>которое
                                поможет тебе добиться своей мечты!
                            </div>
                            <div className="settings">
                                <a href="#root">
                                    <img src="img/settings.svg" alt="settings logo"/>
                                    <span className="set">Настройки</span>
                                </a>
                            </div>
                        </div>
                    </Header>

                    <Content className="main">
                        <div className="block features">
                            С CleverFit ты сможешь:<br/>
                            — планировать свои тренировки на&nbsp;календаре, выбирая тип и&nbsp;уровень
                            нагрузки;<br/>
                            — отслеживать свои достижения в&nbsp;разделе статистики, сравнивая свои
                            результаты с&nbsp;нормами и&nbsp;рекордами;<br/>
                            — создавать свой профиль, где ты можешь загружать свои фото, видео
                            и&nbsp;отзывы
                            о&nbsp;тренировках;<br/>
                            — выполнять расписанные тренировки для разных частей тела, следуя подробным
                            инструкциям и&nbsp;советам профессиональных тренеров.
                        </div>
                        <div className="block slogan">
                            CleverFit&nbsp;— это не просто приложение, а&nbsp;твой личный помощник
                            в&nbsp;мире фитнеса.
                            Не откладывай на&nbsp;завтра&nbsp;— начни тренироваться уже сегодня!
                        </div>
                        <div className="cards-block">
                            {tasks.map(item => (
                                <TaskCard key={item.id} {...item} />
                            ))}
                        </div>
                    </Content>
                </div>

                <footer className="footer">
                    <div className="feedback">
                        Смотреть отзывы
                    </div>
                    <div className="application-card">
                        <div className="card-top">
                            <p className="top-text">Скачать на телефон</p>
                            <p className="bottom-text">Доступно в PRO-тарифах</p>
                        </div>
                        <div className="card-bottom">
                            <div className="android">
                                <AndroidOutlined/> Android OS
                            </div>
                            <div className="apple">
                                <AppleOutlined/> Apple iOS
                            </div>
                        </div>
                    </div>
                </footer>
            </Layout>
        </Layout>
    );
};
