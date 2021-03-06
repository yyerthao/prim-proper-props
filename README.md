# Prim Proper Props

We're creating an application that allows party planners to plan prim and proper parties.

## Base Requirements

This application is fully functional! But `App.js` is getting really crowded. It could use a proper clean up! Add components to clean up `App.js`

Create the new components in the following order (increasing level of difficulty):

1. [x] Header
2. [x] Footer
3. [x] Guest List
4. [x] Dinner Supplies
5. [] Guest Form

The application should still work the same way. Here is what `App.js` `render` method should look like when the refactor is complete:

```JSX
render() {
  return (
    <div className="App">
      <Header />
      <h2>Party Leader</h2>
      {this.state.guestList[0] && <h3>{this.state.guestList[0].name}</h3>}
      <GuestForm
        newGuest={this.state.newGuest}
        handleChangeFor={this.handleChangeFor}
        handleSubmit={this.handleSubmit}
      />
      <GuestList guests={this.state.guestList}/>
      <DinnerSupplies count={this.state.guestList.length}/>
      <Footer />
    </div>
  );
}

```

## Stretch Goals

### Leader

Create a `PartyLeader` Component so that the lines in `App.js`:

```JSX
<h2>Party Leader</h2>
{this.state.guestList[0] && <h3>{this.state.guestList[0].name}</h3>}
```

Can be replaced by:

```JSX
<PartyLeader leader={this.state.guestList[0]}/>
```

### Silverware

Create a `SilverWare` Component as a reusable Component so that the lines in `DinnerSupplies`:

```JSX
<div>
  Spoons: {this.props.count * 2}
</div>
<div>
  Forks: {this.props.count * 2}
</div>
<div>
  Knives: {this.props.count * 2}
</div>
```

Can be replaced by:

```JSX
<SilverWare name="Spoons" count={this.props.count} />
<SilverWare name="Forks" count={this.props.count} />
<SilverWare name="Knives" count={this.props.count} />
```

### Remove a guest

Allow the user to remove a guest from the list by adding a `Delete` button to teach row in the table and removing them from the array.

### Create a Guest Component

Create a `Guest` component that is the `<tr>` of the table and pass props accordingly.




### NOTES:
// mapping is returning an array
// 