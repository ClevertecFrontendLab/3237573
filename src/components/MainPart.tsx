import React, {useState} from "react";

import {
    AndroidOutlined,
    AppleOutlined,
    CalendarOutlined,
    HeartOutlined,
    IdcardOutlined,
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    TrophyOutlined
} from "@ant-design/icons";

import {Button, Layout, Menu} from "antd";
import {TaskCard} from "@components/TaskCard.tsx";

const {
    Header,
    Content,
    Sider
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

export const MainPart: React.FC = () => {
    const [collapsed, setCollapsed] = useState(false);

    return (
        <Layout className="root" >
            <Sider className="sider" width={208} trigger={null} collapsible collapsed={collapsed}
                   style={{
                       background: 'var(--character-light-primary-inverse)',
                       width: '208px',
                       flex: '0 0 208px',
                       maxWidth: 'inherit',
                       minWidth: '64px',

                   }}>
                <div className="menu-and-logo">
                    <div className="logo">
                        {collapsed
                            ? <img src="/img/logo-small.svg" alt="Logo"/>
                            : <img src="/img/logo.svg" alt="Logo"/>
                        }
                    </div>
                    <Menu className="menu"
                          mode="inline"
                          defaultSelectedKeys={['1']}
                          items={[
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
                          ]}
                    />
                </div>
                <div className="exit">
                    <button className="menu-item">
                        <img src="/img/exit.svg" alt="logo exit"/>
                        {collapsed ? "" : <span>Выход</span>}

                    </button>
                </div>
                <div data-test-id="sider-switch" className="sider-switcher__close">
                    <Button data-test-id="sider-switch-mobile"
                            type="text"
                            icon={collapsed ? <MenuUnfoldOutlined/> : <MenuFoldOutlined/>}
                            onClick={() => setCollapsed(!collapsed)}
                            style={{
                                fontSize: '12px',
                                width: 20,
                                height: 66,
                            }}
                    />
                </div>
            </Sider>
            <Layout className="content">
                <Header className="header"
                        style={{}}>
                    <div className="breadcrumb"><a href="#root">Главная</a></div>
                    <div className="heading">
                        <div className="hello">
                            Приветствуем тебя в CleverFit&nbsp;— приложении,<br/> которое поможет
                            тебе добиться своей мечты!
                        </div>
                        <div className="settings">
                            <a href="#root">
                                <img src="/img/settings.svg" alt="settings logo"/>
                                <span className="set">Настройки</span>
                            </a>
                        </div>
                        <div className="settings-360">
                            <a href="#root">
                                <img src="/img/settings.svg" alt="settings logo"/>
                            </a>
                        </div>
                    </div>

                </Header>
                <Content className="main">
                    <div className="block features">
                        С CleverFit ты сможешь:<br/>
                        — планировать свои тренировки на календаре, выбирая тип и уровень
                        нагрузки;<br/>
                        — отслеживать свои достижения в разделе статистики, сравнивая свои
                        результаты с нормами и рекордами;<br/>
                        — создавать свой профиль, где ты можешь загружать свои фото, видео и отзывы
                        о тренировках;<br/>
                        — выполнять расписанные тренировки для разных частей тела, следуя подробным
                        инструкциям и советам профессиональных тренеров.
                    </div>
                    <div className="block slogan">
                        CleverFit — это не просто приложение, а твой личный помощник в мире фитнеса.
                        Не откладывай на завтра — начни тренироваться уже сегодня!
                    </div>
                    <div className="cards-block">
                        {tasks.map(item => (
                            <TaskCard key={item.id} {...item} />
                        ))}
                    </div>
                </Content>
                <div className="footer">
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
                </div>
            </Layout>
        </Layout>
    );
};
