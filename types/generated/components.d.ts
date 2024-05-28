import type { Schema, Attribute } from '@strapi/strapi';

export interface ButtonLink extends Schema.Component {
  collectionName: 'components_button_links';
  info: {
    displayName: 'link';
    icon: 'link';
  };
  attributes: {
    link: Attribute.String;
  };
}

export interface ButtonTitle extends Schema.Component {
  collectionName: 'components_button_titles';
  info: {
    displayName: 'title';
    description: '';
  };
  attributes: {
    title: Attribute.String;
  };
}

export interface ButtonType extends Schema.Component {
  collectionName: 'components_button_types';
  info: {
    displayName: 'Type';
    icon: 'bulletList';
  };
  attributes: {
    type: Attribute.Enumeration<['btn-primary', 'btn-secondary']>;
  };
}

export interface ContentBlockNoImageTiles extends Schema.Component {
  collectionName: 'components_content_block_no_image_tiles';
  info: {
    displayName: 'No Image Tiles';
    icon: 'plus';
    description: '';
  };
  attributes: {
    header: Attribute.String;
    description: Attribute.Text;
    btnTitle: Attribute.String;
    btnType: Attribute.Enumeration<['btn-primary', 'btn-secondary']>;
    btnLink: Attribute.String;
  };
}

export interface ContentBlockTiles extends Schema.Component {
  collectionName: 'components_content_block_tiles';
  info: {
    displayName: 'Tiles';
    description: '';
  };
  attributes: {
    header: Attribute.String;
    title: Attribute.String;
    description: Attribute.Text;
    featuredImage: Attribute.Media;
    btnTitle: Attribute.String;
    btnType: Attribute.Enumeration<['btn-primary', 'btn-secondary']>;
    btnLink: Attribute.String;
    imageRight: Attribute.Boolean & Attribute.DefaultTo<false>;
  };
}

export interface MenuDropdown extends Schema.Component {
  collectionName: 'components_menu_dropdowns';
  info: {
    displayName: 'Dropdown';
    icon: 'arrowDown';
    description: '';
  };
  attributes: {
    title: Attribute.String;
  };
}

export interface MenuLink extends Schema.Component {
  collectionName: 'components_menu_links';
  info: {
    displayName: 'link';
    description: '';
  };
  attributes: {
    name: Attribute.String;
    url: Attribute.String;
    description: Attribute.Text;
    icon: Attribute.Media;
  };
}

export interface MenuMenuButton extends Schema.Component {
  collectionName: 'components_menu_menu_buttons';
  info: {
    displayName: 'MenuButton';
    icon: 'bold';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    url: Attribute.String;
    type: Attribute.Enumeration<['primary', 'secondary']>;
  };
}

export interface MenuMenuLink extends Schema.Component {
  collectionName: 'components_menu_menu_links';
  info: {
    displayName: 'MenuLink';
    icon: 'bulletList';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    url: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'button.link': ButtonLink;
      'button.title': ButtonTitle;
      'button.type': ButtonType;
      'content-block.no-image-tiles': ContentBlockNoImageTiles;
      'content-block.tiles': ContentBlockTiles;
      'menu.dropdown': MenuDropdown;
      'menu.link': MenuLink;
      'menu.menu-button': MenuMenuButton;
      'menu.menu-link': MenuMenuLink;
    }
  }
}
