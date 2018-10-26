import React from "react";
import { dissoc } from "icepick";
import { t } from "c-3po";

import EntityForm from "metabase/entities/containers/EntityForm";
import ModalContent from "metabase/components/ModalContent";

const EntityCopyModal = ({ entityType, entityObject, copy, onClose, onSaved, ...props }) => (
    <ModalContent
        title={t`Duplicate "${entityObject.name}"`}
        onClose={onClose}
      >
        <EntityForm
          entityType={entityType}
          entityObject={{
            ...dissoc(entityObject, "id"),
            name: entityObject.name + " - " + t`Duplicate`
          }}
          create={copy}
          onClose={onClose}
          onSaved={onSaved}
          submitTitle={t`Duplicate`}
          {...props}
        />
      </ModalContent>
  );
  
export default EntityCopyModal;