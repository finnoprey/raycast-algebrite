import { ActionPanel, Action, List } from "@raycast/api";
import { useState } from "react";
var Algebrite = require('algebrite');

export default function Command() {
  // The text in the search box of the calculate command
  const [searchText, setSearchText] = useState("");

  return (
    <List searchText={searchText} onSearchTextChange={setSearchText} searchBarPlaceholder="Type your query">
        <CalculatorListItem content={
          // Simply return a string of the result from Algebrite
          Algebrite.run(searchText).toString()
        } />
    </List>
  );
}

function CalculatorListItem(props: { content: string }) {
  return (
    <List.Item
      title = {props.content ?? "This shouldn't be happening..."}
      actions = {
        <ActionPanel>
          <Action.CopyToClipboard title="Copy result to clipboard" content={props.content}/>
        </ActionPanel>
      }
    />
  )
}
