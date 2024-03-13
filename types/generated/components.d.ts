import type { Schema, Attribute } from '@strapi/strapi';

export interface InfosAddress extends Schema.Component {
  collectionName: 'components_infos_addresses';
  info: {
    displayName: 'Address';
    icon: 'pinMap';
  };
  attributes: {
    street: Attribute.String & Attribute.Required;
    cp: Attribute.String & Attribute.Required;
    city: Attribute.String & Attribute.Required;
  };
}

export interface InfosUrl extends Schema.Component {
  collectionName: 'components_infos_urls';
  info: {
    displayName: 'Url';
    icon: 'link';
    description: '';
  };
  attributes: {
    src: Attribute.String;
    name: Attribute.String & Attribute.Required;
  };
}

export interface ProjectDescription extends Schema.Component {
  collectionName: 'components_project_descriptions';
  info: {
    displayName: 'description';
    icon: 'layer';
    description: '';
  };
  attributes: {
    medias: Attribute.Media;
    content: Attribute.Blocks;
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
      'infos.address': InfosAddress;
      'infos.url': InfosUrl;
      'project.description': ProjectDescription;
      'project.media': ProjectMedia;
    }
  }
}
