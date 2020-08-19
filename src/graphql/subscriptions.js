/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateEnsemble = /* GraphQL */ `
  subscription OnCreateEnsemble {
    onCreateEnsemble {
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
export const onUpdateEnsemble = /* GraphQL */ `
  subscription OnUpdateEnsemble {
    onUpdateEnsemble {
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
export const onDeleteEnsemble = /* GraphQL */ `
  subscription OnDeleteEnsemble {
    onDeleteEnsemble {
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
export const onCreateVideo = /* GraphQL */ `
  subscription OnCreateVideo {
    onCreateVideo {
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
export const onUpdateVideo = /* GraphQL */ `
  subscription OnUpdateVideo {
    onUpdateVideo {
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
export const onDeleteVideo = /* GraphQL */ `
  subscription OnDeleteVideo {
    onDeleteVideo {
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
export const onCreateDirector = /* GraphQL */ `
  subscription OnCreateDirector {
    onCreateDirector {
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
export const onUpdateDirector = /* GraphQL */ `
  subscription OnUpdateDirector {
    onUpdateDirector {
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
export const onDeleteDirector = /* GraphQL */ `
  subscription OnDeleteDirector {
    onDeleteDirector {
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
export const onCreateMember = /* GraphQL */ `
  subscription OnCreateMember {
    onCreateMember {
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
export const onUpdateMember = /* GraphQL */ `
  subscription OnUpdateMember {
    onUpdateMember {
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
export const onDeleteMember = /* GraphQL */ `
  subscription OnDeleteMember {
    onDeleteMember {
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
