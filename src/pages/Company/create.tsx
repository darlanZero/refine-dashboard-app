
import { CompanyList } from './list'
import { Form, Input, Modal, Select } from 'antd'
import { useModalForm, useSelect } from '@refinedev/antd';
import { useGo } from '@refinedev/core';
import { CREATE_COMPANY_MUTATION } from '@/graphql/mutations';
import { USERS_SELECT_QUERY } from '@/graphql/queries';

export const CreatePage = () => {

    const go = useGo()

    const goToListPage = () => {
        go({
            to: { resource: 'companies', action: 'list' },
            options: {keepQuery: true},
            type: 'replace',
        })
    }

    const { modalProps, formProps } = useModalForm({
        action: 'create',
        defaultVisible: true,
        resource: 'companies',
        redirect: false,
        mutationMode: 'pessimistic',
        onMutationSuccess: goToListPage,
        meta: {
            gqlMutation: CREATE_COMPANY_MUTATION 
        }
    });

    const { selectProps, queryResults } = useSelect({
        resource: 'users',
        optionLabel: 'name',
        meta: {
            gqlQuery: USERS_SELECT_QUERY
        }
    })

  return (
    <CompanyList>
        <Modal
            {...modalProps}
            mask={true}
            onCancel={goToListPage}
            title="Create Company"
            width={512}
        >
            <Form
                {...formProps}
                layout='vertical'
            >
                <Form.Item
                    label="Company Name"
                    name="name"
                    rules={[{ required: true }]}
                >
                    <Input 
                        placeholder='Please enter a Company Name'
                    />
                </Form.Item>

                <Form.Item
                    label="Sales"
                    name="salesOwnerId"
                    rules={[{ required: true }]}
                >
                    <Select 
                        placeholder='Please select a Sales Owner'
                        {...selectProps}
                        options={
                            queryResults.data?.data.map((user) => ({
                                values: user.id,
                                label: (
                                    <SelectOptionWithAvatar 
                                        name={user.name}
                                        avatarUrl={user.avatarUrl ?? undefined}
                                    />
                                )
                            }))
                        }
                    />
                </Form.Item>
            </Form>
        </Modal>
    </CompanyList>
  )
}

