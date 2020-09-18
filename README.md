# Test task for a frontend developer

There is a service where a table view is a typical and useful component. One of the examples is a User "list".
One of the important features of such a view is an ability to filter users. Each user in our system is assigned to a user plan
There is a common task to show all users that have selected plans. 

So we need a table view with a filter in one column (the user plans column).

## Implementation details

- We use react
- We use material-ui components
- For certain reasons we want to use material-table, see the filtering [example](https://material-table.com/#/docs/features/filtering) straight away.
- We'd like to see customized selects in our app, not defualt material-ui selects. See an [example here](https://material-table.com/#/docs/features/filtering)

## Acceptance criteria

- There is a SPA with one view: a table with users. Columns: email, user plan
- The user plan column has a filter: a select.
- I can select a user plan. I can see in the user list onlu those users who has such a user plan.
- The user plans filter should look like that customized example of the material-ui select (~bootsrap styled select)

### Optional features

- I can select two user plans to filter the user list
- I can filter options in the plans filter (~autosuggest)

### `yarn start`
**ll steps completed, please verify by running that command**