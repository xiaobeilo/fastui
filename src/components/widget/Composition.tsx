import {Space, Tree} from 'antd'
import { DataNode } from 'antd/lib/tree'
import React, { ReactElement, ReactNode } from 'react'
import { ColorCom } from './Color'
import { Image } from './Image'
import { Repeat } from './Select'
import { BackgroundPosition } from './Value'
const {TreeNode} = Tree

const treeData:DataNode[] = [{
  title: 'background',
  key: 'background',
  children: [
    {
      title: 'color',
      key: 'color',
    },
    {
      title: 'repeat',
      key: 'repeat'
    },
    {
      title: 'position-x',
      key: 'position-x'
    },
    {
      title: 'position-y',
      key: 'position-y'
    },
    {
      title: 'image',
      key: 'image'
    }
  ]
}]
const TitleRender = (node: any):ReactNode => {
  switch(node.key) {
    case 'color': return <ColorCom name={node.title}/>;
    case 'repeat': return <Repeat/>
    case 'position-x': return <BackgroundPosition dir="x"/>
    case 'position-y': return <BackgroundPosition dir="y"/>
    case 'image': return <Image/>
    case 'background': return <span>background</span>
    default: return null
  }
}
export const Background = () => {
  
  return <Tree treeData={treeData} titleRender={TitleRender} expandedKeys={['background']} checkable></Tree>
}
