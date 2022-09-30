<template>
  <div>
    <h1>Simple table</h1>
    <h2>DataTables + Vue3 example</h2>
    <p>
      This example demonstrates the <code>datatables.net-vue3</code> package
      being used to display an interactive DataTable in a Vue application.
    </p>

    <DataTable :data="data" class="display" width="100%">
      <thead>
        <tr>
          <th>A</th>
          <th>B</th>
        </tr>
      </thead>
      <tbody>
                  <tr>
          <th>A</th>
          <th>B</th>
        </tr>
      </tbody>
    </DataTable>
  </div>
</template>

