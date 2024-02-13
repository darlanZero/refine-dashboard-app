import { totalCountVariants } from '@/constants'
import { Card, Skeleton } from 'antd'
import React from 'react'
import { Text } from '../text'

type Props = {
    resource: 'companies' | 'contacts' | 'deals'
    isLoading: boolean
    totalCount: number
}


const DashboardTotalCountCard = ({
    resource,
    isLoading,
    totalCount
}: Props) => {

    const { primaryColor, secondaryColor, icon, title } = totalCountVariants[resource]

  return (
    <Card
        style={{
            height: '96px',
            padding: 8
        }}

        bodyStyle={{
            padding: '8px 8px 8px 12px'
        }}
        size='small'
    >
        <div
            style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                whiteSpace: 'nowrap'
            }}
        >
            {icon}
            <Text
                size='md'
                className='secondary'
                style={{
                    marginLeft: '8px'
                }}
            >
                {title}
            </Text>
        </div>

        <div
            style={{
                display: 'flex',
                justifyContent: 'space-between'
            }}
        >
            <Text
                size='xxl'
                strong
                style={{
                    flex: 1,
                    whiteSpace: 'nowrap',
                    flexShrink: 0,
                    textAlign: 'start',
                    marginLeft: '48px',
                    fontVariantNumeric: 'tabular-nums'
                }}
            >
                {isLoading ? (
                    <Skeleton.Button
                        style={{
                            marginTop: '8px',
                            width: '74px'
                        }}
                    />
                ) : (totalCount)}
            </Text>
        </div>
    </Card>
  )
}

export default DashboardTotalCountCard