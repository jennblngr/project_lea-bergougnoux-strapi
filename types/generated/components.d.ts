import type { Struct, Schema } from '@strapi/strapi';

export interface ProjectMedia extends Struct.ComponentSchema {
  collectionName: 'components_project_media';
  info: {
    displayName: 'media';
    icon: 'picture';
  };
  attributes: {
    source: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    alt: Schema.Attribute.String;
  };
}

export interface ProjectDescription extends Struct.ComponentSchema {
  collectionName: 'components_project_descriptions';
  info: {
    displayName: 'description';
    icon: 'layer';
    description: '';
  };
  attributes: {
    medias: Schema.Attribute.Media<'images', true>;
    content: Schema.Attribute.Blocks;
  };
}

export interface InfosUrl extends Struct.ComponentSchema {
  collectionName: 'components_infos_urls';
  info: {
    displayName: 'Url';
    icon: 'link';
    description: '';
  };
  attributes: {
    src: Schema.Attribute.String;
    name: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface InfosAddress extends Struct.ComponentSchema {
  collectionName: 'components_infos_addresses';
  info: {
    displayName: 'Address';
    icon: 'pinMap';
  };
  attributes: {
    street: Schema.Attribute.String & Schema.Attribute.Required;
    cp: Schema.Attribute.String & Schema.Attribute.Required;
    city: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'project.media': ProjectMedia;
      'project.description': ProjectDescription;
      'infos.url': InfosUrl;
      'infos.address': InfosAddress;
    }
  }
}
