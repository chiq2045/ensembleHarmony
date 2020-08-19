/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createEnsemble = /* GraphQL */ `
  mutation CreateEnsemble(
    $input: CreateEnsembleInput!
    $condition: ModelEnsembleConditionInput
  ) {
    createEnsemble(input: $input, condition: $condition) {
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
export const updateEnsemble = /* GraphQL */ `
  mutation UpdateEnsemble(
    $input: UpdateEnsembleInput!
    $condition: ModelEnsembleConditionInput
  ) {
    updateEnsemble(input: $input, condition: $condition) {
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
export const deleteEnsemble = /* GraphQL */ `
  mutation DeleteEnsemble(
    $input: DeleteEnsembleInput!
    $condition: ModelEnsembleConditionInput
  ) {
    deleteEnsemble(input: $input, condition: $condition) {
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
export const createVideo = /* GraphQL */ `
  mutation CreateVideo(
    $input: CreateVideoInput!
    $condition: ModelVideoConditionInput
  ) {
    createVideo(input: $input, condition: $condition) {
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
export const updateVideo = /* GraphQL */ `
  mutation UpdateVideo(
    $input: UpdateVideoInput!
    $condition: ModelVideoConditionInput
  ) {
    updateVideo(input: $input, condition: $condition) {
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
export const deleteVideo = /* GraphQL */ `
  mutation DeleteVideo(
    $input: DeleteVideoInput!
    $condition: ModelVideoConditionInput
  ) {
    deleteVideo(input: $input, condition: $condition) {
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
export const createDirector = /* GraphQL */ `
  mutation CreateDirector(
    $input: CreateDirectorInput!
    $condition: ModelDirectorConditionInput
  ) {
    createDirector(input: $input, condition: $condition) {
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
export const updateDirector = /* GraphQL */ `
  mutation UpdateDirector(
    $input: UpdateDirectorInput!
    $condition: ModelDirectorConditionInput
  ) {
    updateDirector(input: $input, condition: $condition) {
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
export const deleteDirector = /* GraphQL */ `
  mutation DeleteDirector(
    $input: DeleteDirectorInput!
    $condition: ModelDirectorConditionInput
  ) {
    deleteDirector(input: $input, condition: $condition) {
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
export const createMember = /* GraphQL */ `
  mutation CreateMember(
    $input: CreateMemberInput!
    $condition: ModelMemberConditionInput
  ) {
    createMember(input: $input, condition: $condition) {
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
export const updateMember = /* GraphQL */ `
  mutation UpdateMember(
    $input: UpdateMemberInput!
    $condition: ModelMemberConditionInput
  ) {
    updateMember(input: $input, condition: $condition) {
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
export const deleteMember = /* GraphQL */ `
  mutation DeleteMember(
    $input: DeleteMemberInput!
    $condition: ModelMemberConditionInput
  ) {
    deleteMember(input: $input, condition: $condition) {
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
