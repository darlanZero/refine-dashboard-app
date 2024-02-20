import { COMPANIES_LIST_QUERY } from "@/graphql/queries"
import { CreateButton, List, useTable } from "@refinedev/antd"
import { useGo } from "@refinedev/core"
import { Table } from "antd"

export const CompanyList = () => {

  const go = useGo()

  const {tableProps, filters} = useTable({
    resource: 'companies',
    pagination: {
      pageSize: 12
    },
    meta: {
      gqlQuery: COMPANIES_LIST_QUERY,
    }
  })

  return (
    <List
      breadcrumb={false}
      headerButtons={() => (
        <CreateButton 
          onClick={() => {
            go({
              to: {
                resource: 'companies',
                action: 'create'
              },
              options: {
                keepQuery: true
              },
              type: 'replace'
            })
          }}
        />
      )}
    >
      <Table
        {...tableProps}
        pagination={{
          ...tableProps.pagination
        }}
      >
        <Table.Column 
          dataIndex="name"
          title="Company Title"
        />
      </Table>
    </List>
  )
}

