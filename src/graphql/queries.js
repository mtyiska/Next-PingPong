/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getGame = /* GraphQL */ `
  query GetGame($id: ID!) {
    getGame(id: $id) {
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
export const listGames = /* GraphQL */ `
  query ListGames(
    $filter: ModelGameFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listGames(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getPlayer = /* GraphQL */ `
  query GetPlayer($id: ID!) {
    getPlayer(id: $id) {
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
export const listPlayers = /* GraphQL */ `
  query ListPlayers(
    $filter: ModelPlayerFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPlayers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        playerByRank
        wins
        score
        game {
          id
          name
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
      nextToken
    }
  }
`;
export const listPlayersByRank = /* GraphQL */ `
  query ListPlayersByRank(
    $playerByRank: String!
    $wins: ModelIntKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelPlayerFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPlayersByRank(
      playerByRank: $playerByRank
      wins: $wins
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        playerByRank
        wins
        score
        game {
          id
          name
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
      nextToken
    }
  }
`;
export const playerByName = /* GraphQL */ `
  query PlayerByName(
    $name: String!
    $id: ModelIDKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelPlayerFilterInput
    $limit: Int
    $nextToken: String
  ) {
    playerByName(
      name: $name
      id: $id
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        playerByRank
        wins
        score
        game {
          id
          name
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
      nextToken
    }
  }
`;
