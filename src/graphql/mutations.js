/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createGame = /* GraphQL */ `
  mutation CreateGame(
    $input: CreateGameInput!
    $condition: ModelGameConditionInput
  ) {
    createGame(input: $input, condition: $condition) {
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
export const updateGame = /* GraphQL */ `
  mutation UpdateGame(
    $input: UpdateGameInput!
    $condition: ModelGameConditionInput
  ) {
    updateGame(input: $input, condition: $condition) {
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
export const deleteGame = /* GraphQL */ `
  mutation DeleteGame(
    $input: DeleteGameInput!
    $condition: ModelGameConditionInput
  ) {
    deleteGame(input: $input, condition: $condition) {
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
export const createPlayer = /* GraphQL */ `
  mutation CreatePlayer(
    $input: CreatePlayerInput!
    $condition: ModelPlayerConditionInput
  ) {
    createPlayer(input: $input, condition: $condition) {
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
export const updatePlayer = /* GraphQL */ `
  mutation UpdatePlayer(
    $input: UpdatePlayerInput!
    $condition: ModelPlayerConditionInput
  ) {
    updatePlayer(input: $input, condition: $condition) {
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
export const deletePlayer = /* GraphQL */ `
  mutation DeletePlayer(
    $input: DeletePlayerInput!
    $condition: ModelPlayerConditionInput
  ) {
    deletePlayer(input: $input, condition: $condition) {
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
