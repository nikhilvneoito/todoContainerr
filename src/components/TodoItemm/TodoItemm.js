import React from 'react'
import { useFederatedComponent } from '@appblocks/js-sdk'

const TodoItemm = (props) => {
  const system = {
    url: `${process.env.BLOCK_ENV_URL_todoItemm}/remoteEntry.js`,
    scope: 'todoItemm',
    module: './todoItemm',
  }

  const { Component: FederatedComponent, errorLoading } = useFederatedComponent(
    system?.url,
    system?.scope,
    system?.module,
    React
  )

  // console.log(FederatedComponent);
  return (
    <React.Suspense fallback={''}>
      {errorLoading ? `Error loading module "${module}"` : FederatedComponent && <FederatedComponent {...props} />}
    </React.Suspense>
  )
}

export default TodoItemm
