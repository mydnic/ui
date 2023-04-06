# Table component

The table component allows you to easily build an html table with superbe design and optional pagination.

The component heavily uses slots.

## How To Use

Assuming you've loaded all components in your projects, you can use the component like this:

```html
<template>
    <!-- Inside your Vue Components -->
    <table-list
        :paginate="25"
        :cols="[
            {title: 'First Name', slot: 'first_name'},
            {title: 'Last Name', slot: 'last_name'},
            {title: 'Profession', slot: 'job_title'},
        ]"
        :items="workers"
    >
        <div slot="first_name" slot-scope="{item: worker}">
            {{ worker.first_name }}
        </div>
        <div slot="last_name" slot-scope="{item: worker}">
            {{ worker.last_name }}
        </div>
        <div slot="job_title" slot-scope="{item: worker}">
            {{ worker.job_title }}
        </div>
    </table-list>
</template>
```

The paginate parameter is optional. If set, a footer will be added to the table with Previous and Next button to switch pages.
