// src/components/shared/Header.tsx
<<<<<<< HEAD
=======
<<<<<<< HEAD
import React, { useState } from 'react'; // <--- Agregado useState
=======
>>>>>>> e8da3abcd0480b37f872a7006ab961f2b4bce4f7
//
// Componente reutilizable para la barra superior de cada pantalla.
//
// En React Native, los componentes se crean como funciones (o clases, pero
// las funciones son la forma moderna). Un componente recibe "props" (propiedades)
// y retorna JSX (la sintaxis que parece HTML pero es JavaScript).
//
// Este componente reemplaza el <header> del diseño web, adaptado a móvil.
// En móvil no tiene la barra de búsqueda amplia del desktop — solo muestra
// el título, notificaciones y el avatar del usuario.

<<<<<<< HEAD
import React, { useState } from 'react';
=======
import React from 'react';
>>>>>>> origin/master
>>>>>>> e8da3abcd0480b37f872a7006ab961f2b4bce4f7
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
<<<<<<< HEAD
  Image,
  Modal,
  FlatList,
  TouchableWithoutFeedback,
=======
<<<<<<< HEAD
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { MaterialIcons } from '@expo/vector-icons';
import { Colors, Typography } from '../../theme/colors';
import NotificationModal from './feedback/NotificationModal'; // <--- Agregado el import

interface HeaderProps {
  title: string;
  showSearch?: boolean;
  onSearchPress?: () => void;
}

export default function Header({ title, showSearch = false, onSearchPress }: HeaderProps) {
  const insets = useSafeAreaInsets();
  const [modalVisible, setModalVisible] = useState(false); // <--- Estado para el modal

  return (
    <View style={[styles.container, { paddingTop: insets.top + 8 }]}>
=======
  Image,
>>>>>>> e8da3abcd0480b37f872a7006ab961f2b4bce4f7
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { MaterialIcons } from '@expo/vector-icons';
import { Colors, BorderRadius, Typography } from '../../theme/colors';

// Definimos qué props acepta este componente.
// TypeScript nos ayuda a saber exactamente qué le podemos pasar.
interface HeaderProps {
  title: string;                    // El título que aparece en el header
  showSearch?: boolean;             // ¿Mostrar ícono de búsqueda? (opcional, por defecto false)
  onSearchPress?: () => void;       // Función que se llama al tocar búsqueda
}

<<<<<<< HEAD
const initialNotifications = [
  {
    id: '1',
    title: '¡Pedido Listo!',
    message: 'Tu Artisan Salad Bowl ya está preparado en la Sede Centro. ¡Buen provecho!',
    time: 'Hace 5m',
    icon: 'restaurant',
    unread: true,
  },
  {
    id: '2',
    title: 'Puntos Acumulados',
    message: 'Has ganado +18 Puntos Pass por tu consumo de hoy. ¡Sigue así!',
    time: 'Hace 2h',
    icon: 'star',
    unread: true,
  },
  {
    id: '3',
    title: 'Sede Cercana',
    message: '¿Estás cerca de la Sede Norte? Conoce el menú del chef para hoy.',
    time: 'Ayer',
    icon: 'place',
    unread: false,
  },
];

=======
>>>>>>> e8da3abcd0480b37f872a7006ab961f2b4bce4f7
export default function Header({ title, showSearch = false, onSearchPress }: HeaderProps) {
  // useSafeAreaInsets nos da los márgenes necesarios para no invadir
  // el área del notch (iPhone) o la barra de estado (Android)
  const insets = useSafeAreaInsets();
<<<<<<< HEAD
  const [showNotifModal, setShowNotifModal] = useState(false);
  const [notifications, setNotifications] = useState(initialNotifications);

  const deleteNotification = (id: string) => {
    setNotifications(prev => prev.filter(n => n.id !== id));
  };

  const clearAllNotifications = () => {
    setNotifications([]);
  };
=======
>>>>>>> e8da3abcd0480b37f872a7006ab961f2b4bce4f7

  return (
    // El paddingTop dinámico es clave: se adapta a cada dispositivo automáticamente
    <View style={[styles.container, { paddingTop: insets.top + 8 }]}>

      {/* Nombre de la app */}
<<<<<<< HEAD
=======
>>>>>>> origin/master
>>>>>>> e8da3abcd0480b37f872a7006ab961f2b4bce4f7
      <View style={styles.titleContainer}>
        <Text style={styles.appName}>FoodPass</Text>
        <Text style={styles.subtitle}>{title}</Text>
      </View>

<<<<<<< HEAD
=======
<<<<<<< HEAD
      <View style={styles.actions}>
        {showSearch && (
          <TouchableOpacity
=======
>>>>>>> e8da3abcd0480b37f872a7006ab961f2b4bce4f7
      {/* Acciones del lado derecho */}
      <View style={styles.actions}>

        {/* Botón de búsqueda (opcional) */}
        {showSearch && (
          <TouchableOpacity
            // TouchableOpacity es el componente de botón más común en RN.
            // Se vuelve semitransparente al presionarlo (feedback visual).
<<<<<<< HEAD
=======
>>>>>>> origin/master
>>>>>>> e8da3abcd0480b37f872a7006ab961f2b4bce4f7
            style={styles.iconButton}
            onPress={onSearchPress}
            activeOpacity={0.7}
          >
            <MaterialIcons name="search" size={24} color={Colors.onBackground} />
          </TouchableOpacity>
        )}

<<<<<<< HEAD
        {/* Botón de notificaciones */}
        <TouchableOpacity
          style={styles.iconButton}
          activeOpacity={0.7}
          onPress={() => setShowNotifModal(true)}
        >
=======
<<<<<<< HEAD
        {/* Botón de notificaciones - Ahora funcional */}
        <TouchableOpacity 
          style={styles.iconButton} 
          activeOpacity={0.7}
          onPress={() => setModalVisible(true)} // <--- Abre el modal
        >
          <View style={styles.notifWrapper}>
            <MaterialIcons name="notifications" size={24} color={Colors.onBackground} />
=======
        {/* Botón de notificaciones */}
        <TouchableOpacity style={styles.iconButton} activeOpacity={0.7}>
>>>>>>> e8da3abcd0480b37f872a7006ab961f2b4bce4f7
          {/* View relativa para posicionar el punto rojo encima del ícono */}
          <View style={styles.notifWrapper}>
            <MaterialIcons name="notifications" size={24} color={Colors.onBackground} />
            {/* El punto naranja que indica notificaciones pendientes */}
<<<<<<< HEAD
            {notifications.length > 0 && <View style={styles.notifDot} />}
          </View>
        </TouchableOpacity>

        {/* Avatar del usuario */}
=======
>>>>>>> origin/master
            <View style={styles.notifDot} />
          </View>
        </TouchableOpacity>

<<<<<<< HEAD
=======
        {/* Avatar del usuario */}
>>>>>>> origin/master
>>>>>>> e8da3abcd0480b37f872a7006ab961f2b4bce4f7
        <View style={styles.avatar}>
          <Text style={styles.avatarText}>MS</Text>
        </View>
      </View>
<<<<<<< HEAD

      {/* Modal de Notificaciones */}
      <Modal
        visible={showNotifModal}
        transparent
        animationType="slide"
        onRequestClose={() => setShowNotifModal(false)}
      >
        <TouchableWithoutFeedback onPress={() => setShowNotifModal(false)}>
          <View style={styles.modalOverlay}>
            <TouchableWithoutFeedback>
              <View style={styles.modalContent}>
                {/* Cabecera del modal */}
                <View style={styles.modalHeader}>
                  <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8 }}>
                    <MaterialIcons name="notifications" size={24} color={Colors.inverseSurface} />
                    <Text style={styles.modalTitle}>Notificaciones</Text>
                  </View>
                  {notifications.length > 0 && (
                    <TouchableOpacity onPress={clearAllNotifications}>
                      <Text style={styles.clearAllText}>Limpiar todo</Text>
                    </TouchableOpacity>
                  )}
                </View>

                {/* Lista de notificaciones */}
                {notifications.length > 0 ? (
                  <FlatList
                    data={notifications}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => (
                      <View style={styles.notifItem}>
                        <View style={[styles.notifIconWrap, { backgroundColor: item.unread ? Colors.surfaceContainerLow : Colors.surfaceContainerHigh }]}>
                          <MaterialIcons
                            name={item.icon as any}
                            size={20}
                            color={item.unread ? Colors.primary : Colors.onSurfaceVariant}
                          />
                        </View>
                        <View style={styles.notifTextContainer}>
                          <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                            <Text style={[styles.notifItemTitle, item.unread && { fontWeight: '700' }]}>{item.title}</Text>
                            <Text style={styles.notifTime}>{item.time}</Text>
                          </View>
                          <Text style={styles.notifMessage} numberOfLines={2}>{item.message}</Text>
                        </View>
                        <TouchableOpacity
                          style={styles.deleteNotifButton}
                          onPress={() => deleteNotification(item.id)}
                        >
                          <MaterialIcons name="close" size={16} color={Colors.onSurfaceVariant} />
                        </TouchableOpacity>
                      </View>
                    )}
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={styles.notifList}
                  />
                ) : (
                  // Estado vacío
                  <View style={styles.emptyStateContainer}>
                    <View style={styles.emptyIconWrap}>
                      <MaterialIcons name="notifications-none" size={48} color={Colors.outline} />
                    </View>
                    <Text style={styles.emptyStateTitle}>¡Estás al día!</Text>
                    <Text style={styles.emptyStateSubtitle}>
                      No tienes notificaciones pendientes en este momento.
                    </Text>
                  </View>
                )}

                {/* Botón de cerrar */}
                <TouchableOpacity
                  style={styles.closeModalButton}
                  onPress={() => setShowNotifModal(false)}
                  activeOpacity={0.8}
                >
                  <Text style={styles.closeModalButtonText}>Cerrar</Text>
                </TouchableOpacity>
              </View>
            </TouchableWithoutFeedback>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
=======
<<<<<<< HEAD

      {/* El Modal de Notificaciones */}
      <NotificationModal 
        visible={modalVisible} 
        onClose={() => setModalVisible(false)} 
      />
=======
>>>>>>> origin/master
>>>>>>> e8da3abcd0480b37f872a7006ab961f2b4bce4f7
    </View>
  );
}

<<<<<<< HEAD
=======
<<<<<<< HEAD
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingBottom: 12,
    backgroundColor: 'rgba(255, 255, 255, 0.85)',
=======
>>>>>>> e8da3abcd0480b37f872a7006ab961f2b4bce4f7
// StyleSheet.create() es la forma de definir estilos en React Native.
// Es similar a CSS pero son objetos JavaScript.
//
// Diferencias importantes con CSS:
// - No hay unidades (no se escribe "16px", solo 16)
// - Los nombres son camelCase (backgroundColor, no background-color)
// - No hay cascada ni herencia (cada componente tiene sus estilos)
// - flexDirection por defecto es 'column' (en web es 'row')
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',           // Los hijos van en fila (horizontal)
    alignItems: 'center',           // Centrados verticalmente
    justifyContent: 'space-between',// Espacio entre título y acciones
    paddingHorizontal: 20,
    paddingBottom: 12,
    backgroundColor: 'rgba(255, 255, 255, 0.85)', // Fondo semitransparente (glassmorphism)
    // Sombra sutil (equivalente al backdrop-blur del diseño web)
<<<<<<< HEAD
=======
>>>>>>> origin/master
>>>>>>> e8da3abcd0480b37f872a7006ab961f2b4bce4f7
    shadowColor: '#121f05',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.06,
    shadowRadius: 20,
<<<<<<< HEAD
=======
<<<<<<< HEAD
    elevation: 4,
  },
  titleContainer: {
    flex: 1,
  },
  appName: {
    ...Typography.titleLg,
    color: Colors.inverseSurface,
=======
>>>>>>> e8da3abcd0480b37f872a7006ab961f2b4bce4f7
    elevation: 4,                   // Android
  },
  titleContainer: {
    flex: 1,                        // Ocupa todo el espacio disponible
  },
  appName: {
    ...Typography.titleLg,
    color: Colors.inverseSurface,   // Verde oscuro
<<<<<<< HEAD
=======
>>>>>>> origin/master
>>>>>>> e8da3abcd0480b37f872a7006ab961f2b4bce4f7
  },
  subtitle: {
    ...Typography.labelSm,
    color: Colors.onSurfaceVariant,
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
  actions: {
    flexDirection: 'row',
    alignItems: 'center',
<<<<<<< HEAD
    gap: 8,                         // Espacio entre los botones de acción
=======
<<<<<<< HEAD
    gap: 8,
=======
    gap: 8,                         // Espacio entre los botones de acción
>>>>>>> origin/master
>>>>>>> e8da3abcd0480b37f872a7006ab961f2b4bce4f7
  },
  iconButton: {
    width: 40,
    height: 40,
<<<<<<< HEAD
    borderRadius: 20,               // Circular
=======
<<<<<<< HEAD
    borderRadius: 20,
=======
    borderRadius: 20,               // Circular
>>>>>>> origin/master
>>>>>>> e8da3abcd0480b37f872a7006ab961f2b4bce4f7
    backgroundColor: Colors.surfaceContainerLow,
    justifyContent: 'center',
    alignItems: 'center',
  },
  notifWrapper: {
<<<<<<< HEAD
=======
<<<<<<< HEAD
    position: 'relative',
  },
  notifDot: {
    position: 'absolute',
=======
>>>>>>> e8da3abcd0480b37f872a7006ab961f2b4bce4f7
    position: 'relative',           // Para posicionar el punto rojo relativamente
  },
  notifDot: {
    position: 'absolute',           // Se posiciona encima del ícono
<<<<<<< HEAD
=======
>>>>>>> origin/master
>>>>>>> e8da3abcd0480b37f872a7006ab961f2b4bce4f7
    top: -2,
    right: -2,
    width: 8,
    height: 8,
<<<<<<< HEAD
    borderRadius: 4,                // Circular
    backgroundColor: Colors.primaryContainer, // Naranja
=======
<<<<<<< HEAD
    borderRadius: 4,
    backgroundColor: Colors.primaryContainer,
=======
    borderRadius: 4,                // Circular
    backgroundColor: Colors.primaryContainer, // Naranja
>>>>>>> origin/master
>>>>>>> e8da3abcd0480b37f872a7006ab961f2b4bce4f7
  },
  avatar: {
    width: 36,
    height: 36,
<<<<<<< HEAD
    borderRadius: 18,               // Circular
    backgroundColor: Colors.inverseSurface, // Verde oscuro
=======
<<<<<<< HEAD
    borderRadius: 18,
    backgroundColor: Colors.inverseSurface,
=======
    borderRadius: 18,               // Circular
    backgroundColor: Colors.inverseSurface, // Verde oscuro
>>>>>>> origin/master
>>>>>>> e8da3abcd0480b37f872a7006ab961f2b4bce4f7
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatarText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: '700',
  },
<<<<<<< HEAD
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(18, 31, 5, 0.4)',
    justifyContent: 'flex-end',
  },
  modalContent: {
    backgroundColor: Colors.surfaceContainerLowest,
    borderTopLeftRadius: BorderRadius.xxxl,
    borderTopRightRadius: BorderRadius.xxxl,
    paddingHorizontal: 20,
    paddingTop: 24,
    paddingBottom: 34,
    maxHeight: '75%',
    shadowColor: '#121f05',
    shadowOffset: { width: 0, height: -10 },
    shadowOpacity: 0.1,
    shadowRadius: 20,
    elevation: 20,
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  modalTitle: {
    ...Typography.titleLg,
    color: Colors.onBackground,
  },
  clearAllText: {
    fontSize: 12,
    fontWeight: '700',
    color: Colors.primary,
  },
  notifList: {
    paddingBottom: 16,
  },
  notifItem: {
    flexDirection: 'row',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: Colors.surfaceContainerHigh,
    alignItems: 'flex-start',
  },
  notifIconWrap: {
    width: 38,
    height: 38,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  notifTextContainer: {
    flex: 1,
    paddingRight: 8,
  },
  notifItemTitle: {
    fontSize: 13,
    fontWeight: '600',
    color: Colors.onSurface,
  },
  notifTime: {
    fontSize: 11,
    color: Colors.onSurfaceVariant,
    opacity: 0.7,
  },
  notifMessage: {
    fontSize: 12,
    color: Colors.onSurfaceVariant,
    lineHeight: 16,
    marginTop: 2,
  },
  deleteNotifButton: {
    padding: 4,
  },
  emptyStateContainer: {
    alignItems: 'center',
    paddingVertical: 40,
  },
  emptyIconWrap: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: Colors.surfaceContainerLow,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
  },
  emptyStateTitle: {
    ...Typography.titleMd,
    color: Colors.onBackground,
    marginBottom: 6,
  },
  emptyStateSubtitle: {
    ...Typography.bodySm,
    color: Colors.onSurfaceVariant,
    textAlign: 'center',
    paddingHorizontal: 20,
  },
  closeModalButton: {
    marginTop: 16,
    backgroundColor: Colors.inverseSurface,
    paddingVertical: 14,
    borderRadius: BorderRadius.xl,
    alignItems: 'center',
  },
  closeModalButtonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '700',
  },
});
=======
<<<<<<< HEAD
});
=======
});
>>>>>>> origin/master
>>>>>>> e8da3abcd0480b37f872a7006ab961f2b4bce4f7
