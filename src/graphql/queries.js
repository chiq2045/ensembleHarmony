/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getEnsemble = /* GraphQL */ `
  query GetEnsemble($id: ID!) {
    getEnsemble(id: $id) {
      id
      name
      videos {
        items {
          id
          title
          ensembleID
          memberID
          createdAt
          updatedAt
        }
        nextToken
      }
      directorID
      director {
        id
        name
        ensembles {
          nextToken
        }
        createdAt
        updatedAt
      }
      members {
        items {
          id
          name
          ensembleID
          director
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const listEnsembles = /* GraphQL */ `
  query ListEnsembles(
    $filter: ModelEnsembleFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listEnsembles(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        videos {
          nextToken
        }
        directorID
        director {
          id
          name
          createdAt
          updatedAt
        }
        members {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getVideo = /* GraphQL */ `
  query GetVideo($id: ID!) {
    getVideo(id: $id) {
      id
      title
      ensembleID
      ensemble {
        id
        name
        videos {
          nextToken
        }
        directorID
        director {
          id
          name
          createdAt
          updatedAt
        }
        members {
          nextToken
        }
        createdAt
        updatedAt
      }
      memberID
      member {
        id
        name
        videos {
          nextToken
        }
        ensembleID
        ensemble {
          nextToken
        }
        director
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const listVideos = /* GraphQL */ `
  query ListVideos(
    $filter: ModelVideoFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listVideos(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        ensembleID
        ensemble {
          id
          name
          directorID
          createdAt
          updatedAt
        }
        memberID
        member {
          id
          name
          ensembleID
          director
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getDirector = /* GraphQL */ `
  query GetDirector($id: ID!) {
    getDirector(id: $id) {
      id
      name
      ensembles {
        items {
          id
          name
          directorID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const listDirectors = /* GraphQL */ `
  query ListDirectors(
    $filter: ModelDirectorFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listDirectors(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        ensembles {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getMember = /* GraphQL */ `
  query GetMember($id: ID!) {
    getMember(id: $id) {
      id
      name
      videos {
        items {
          id
          title
          ensembleID
          memberID
          createdAt
          updatedAt
        }
        nextToken
      }
      ensembleID
      ensemble {
        items {
          id
          name
          directorID
          createdAt
          updatedAt
        }
        nextToken
      }
      director
      createdAt
      updatedAt
    }
  }
`;
export const listMembers = /* GraphQL */ `
  query ListMembers(
    $filter: ModelMemberFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMembers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        videos {
          nextToken
        }
        ensembleID
        ensemble {
          nextToken
        }
        director
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
