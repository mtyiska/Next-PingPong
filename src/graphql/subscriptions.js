/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateGame = /* GraphQL */ `
  subscription OnCreateGame($owner: String) {
    onCreateGame(owner: $owner) {
      id
      name
      players {
        items {
          id
          playerByRank
          wins
          score
          name
          createdAt
          updatedAt
          gamePlayersId
          owner
        }
        nextToken
      }
      winner
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onUpdateGame = /* GraphQL */ `
  subscription OnUpdateGame($owner: String) {
    onUpdateGame(owner: $owner) {
      id
      name
      players {
        items {
          id
          playerByRank
          wins
          score
          name
          createdAt
          updatedAt
          gamePlayersId
          owner
        }
        nextToken
      }
      winner
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onDeleteGame = /* GraphQL */ `
  subscription OnDeleteGame($owner: String) {
    onDeleteGame(owner: $owner) {
      id
      name
      players {
        items {
          id
          playerByRank
          wins
          score
          name
          createdAt
          updatedAt
          gamePlayersId
          owner
        }
        nextToken
      }
      winner
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onCreatePlayer = /* GraphQL */ `
  subscription OnCreatePlayer($owner: String) {
    onCreatePlayer(owner: $owner) {
      id
      playerByRank
      wins
      score
      game {
        id
        name
        players {
          nextToken
        }
        winner
        createdAt
        updatedAt
        owner
      }
      name
      createdAt
      updatedAt
      gamePlayersId
      owner
    }
  }
`;
export const onUpdatePlayer = /* GraphQL */ `
  subscription OnUpdatePlayer($owner: String) {
    onUpdatePlayer(owner: $owner) {
      id
      playerByRank
      wins
      score
      game {
        id
        name
        players {
          nextToken
        }
        winner
        createdAt
        updatedAt
        owner
      }
      name
      createdAt
      updatedAt
      gamePlayersId
      owner
    }
  }
`;
export const onDeletePlayer = /* GraphQL */ `
  subscription OnDeletePlayer($owner: String) {
    onDeletePlayer(owner: $owner) {
      id
      playerByRank
      wins
      score
      game {
        id
        name
        players {
          nextToken
        }
        winner
        createdAt
        updatedAt
        owner
      }
      name
      createdAt
      updatedAt
      gamePlayersId
      owner
    }
  }
`;
