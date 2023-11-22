import type { Schema, Attribute } from '@strapi/strapi';

export interface ProjectDescription extends Schema.Component {
  collectionName: 'components_project_descriptions';
  info: {
    displayName: 'description';
    icon: 'layer';
    description: '';
  };
  attributes: {
    text: Attribute.RichText;
    media: Attribute.Media;
  };
}

export interface ProjectMedia extends Schema.Component {
  collectionName: 'components_project_media';
  info: {
    displayName: 'media';
    icon: 'picture';
  };
  attributes: {
    source: Attribute.Media & Attribute.Required;
    alt: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'project.description': ProjectDescription;
      'project.media': ProjectMedia;
    }
  }
}
