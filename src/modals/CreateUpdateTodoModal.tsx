import React from 'react'

import { ModalLayout } from '@/layouts/ModalLayout'

export const CreateUpdateTodoModal = () => {

  const handleCreateTodo = () => {

  }

  return (
    <ModalLayout>
      <ModalLayout.Icon
        iconName="EXCLAMATION"
        className="bg-red-500"
        iconClassName="text-white"
      />
      <ModalLayout.Title title="Todo Modal" />
      <ModalLayout.Body>
        <button onClick={handleCreateTodo}>create todo</button>
        <p className="text-sm text-gray-500">
          Are you sure you want to deactivate your account? All of your data
          will be permanently removed. This action cannot be undone.
        </p>
      </ModalLayout.Body>
      <ModalLayout.FooterActions
        variant="danger"
        alignActions="start"
        onSubmit={handleCreateTodo}
        onCancel={handleCreateTodo}
      />
    </ModalLayout>
  )
}
