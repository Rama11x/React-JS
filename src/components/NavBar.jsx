import { Menu } from 'antd'
import { DeploymentUnitOutlined, ExperimentOutlined, MergeOutlined } from '@ant-design/icons'
import CartWidget from './CartWidget';  
import '../styles.css'

const NavBar = () => {

    const items = [
        {
          key: '1',
          icon: <DeploymentUnitOutlined />,
          label: 'Proteinas',
          children: [
            { key: '11', label: 'Option 1' },
            { key: '12', label: 'Option 2' },
            { key: '13', label: 'Option 3' },
            { key: '14', label: 'Option 4' },
          ],
        },
        {
          key: '2',
          icon: <ExperimentOutlined />,
          label: 'Creatinas',
          children: [
            { key: '21', label: 'Option 1' },
            { key: '22', label: 'Option 2' },
            { key: '23', label: 'Option 3' },
          ],
        },
        {
          key: '3',
          icon: <MergeOutlined />,
          label: 'Aminoacidos',
          children: [
            { key: '31', label: 'Option 1' },
            { key: '32', label: 'Option 2' },
            { key: '33', label: 'Option 3' },
            { key: '34', label: 'Option 4' },
          ],
        },
      ];



  return (
    <div className="navBar">
        <h1>RG supplements</h1>
        <Menu mode="horizontal" items={items}/>
        <CartWidget/>

    </div>
  )
}

export default NavBar