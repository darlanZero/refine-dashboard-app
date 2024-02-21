
import { CompanyList } from './list'
import { Form, Input, Modal } from 'antd'
import { useModalForm } from '@refinedev/antd';
import { useGo } from '@refinedev/core';
import { CREATE_COMPANY_MUTATION } from '@/graphql/mutations';

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
            </Form>
        </Modal>
    </CompanyList>
  )
}

