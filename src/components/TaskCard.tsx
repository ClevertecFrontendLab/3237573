import {FC} from "react";
import {Card, Space} from 'antd';

interface TaskProps {
    title: string,
    icon: any,
    name: string
}

export const TaskCard: FC<TaskProps> = ({title, icon, name}) => {

    return (
        <Space className="cards">
            <Card className="card-item" title={title} >
                <p className="card-icon-text">{icon} {name}</p>
            </Card>
        </Space>
    );
}
